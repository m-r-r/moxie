//! An experimental starlark-based task tool for extending Cargo projects.

use {
    failure::Error,
    std::path::PathBuf,
    structopt::StructOpt,
    tracing::*,
    tracing_subscriber::{filter::LevelFilter, fmt::Subscriber},
};

#[derive(Debug, StructOpt)]
struct Options {
    /// Enable debug logging.
    #[structopt(short, long)]
    verbose: bool,

    /// Path to root.towl. Defaults to recursively searching from the current directory up.
    #[structopt(long, parse(from_os_str), env = "ROOT_TOWL")]
    root: Option<PathBuf>,

    /// Outcome(s) to realize.
    outcomes: Vec<String>,
}

impl Options {
    fn init_logging(&self) {
        let level: LevelFilter = if self.verbose { "debug" } else { "info" }.parse().unwrap();
        let subscriber = Subscriber::builder().with_max_level(level).finish();
        tracing::subscriber::set_global_default(subscriber)
            .expect("couldn't set global default subscriber");
    }

    fn run(self) -> Result<(), Error> {
        self.init_logging();
        let root_towl = match self.root {
            Some(r) => r,
            None => find_root_towl()?,
        };

        debug!("initialized");
        info!({ root_towl = %root_towl.display() }, "starting");

        Ok(())
    }
}

fn find_root_towl() -> Result<PathBuf, Error> {
    let mut search_dir = std::env::current_dir()?.join("to_pop");
    while search_dir.pop() {
        let search_path = search_dir.join("root.towl");
        if search_path.is_file() {
            return Ok(search_path);
        }
    }
    Err(failure::err_msg(
        "couldn't find a root.towl in the current directory or parents",
    ))
}

fn main() -> Result<(), Error> {
    Options::from_args().run()
}
