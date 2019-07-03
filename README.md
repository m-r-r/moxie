# moxie 

![Crates.io](https://img.shields.io/crates/l/moxie.svg)

`moxie` (<small>/ˈmäksē/</small>) is a lightweight platform-agnostic UI runtime written in Rust, powering a strongly-typed declarative programming style with minimal interaction latency.

The runtime itself doesn't have a "native" platform, and a `moxie::runloop` instance is a `Future` which owns the UI state and can be polled in-place or spawned onto an executor as defined by the application. Instances of the runtime are (TODO) independent of one another, and resource consumption is the only limit on concurrent execution of multiple runloops. This aligns with the project's goal to both empower Rust users to integrate existing frameworks into a top-level Rust app *and* to allow Rust-implemented UI components to be used across many language and application environments.

TODO write a book about what all this means? and put at least one code example here.

`moxie` is principally inspired by [React][react] and more specifically the recent [Hooks API][hooks]. It aims to smoothly bridge the gap between stateless tools like [dear imgui][dear] and "traditional" UI paradigms with manually managed graphs of stateful, mutable objects. There are many interesting parallels in our design to those of recently announced UI frameworks [Jetpack Compose][compose] and [SwiftUI][swiftui], although a more in-depth comparison hasn't yet been written. Also, in the course of looking for prior art (_ahem_ googling "memoized imgui"), I found a very interesting [thread on LtU](http://lambda-the-ultimate.org/node/4561) discussing various commenters' efforts and curiosities -- it's a fun read.

[react]: https://reactjs.org
[hooks]: https://reactjs.org/docs/hooks-intro.html
[dear]: https://github.com/ocornut/imgui
[swiftui]: https://developer.apple.com/xcode/swiftui/
[compose]: https://developer.android.com/jetpack/compose

## Versioning

`moxie` currently requires a nightly Rust toolchain as specified in `./rust-toolchain` for the [`async_await` feature](https://github.com/rust-lang/rust/issues/62149).

## Contributing

The project is not yet ready for external contributions, although I hope to change this message before RustConf 2019 (we'll see!). In the meantime, I'm currently trying out a [Discord server](https://discord.gg/vTAzk3d) for chat and will continue working towards the project's maturity enough to onboard!

See [CONDUCT.md](CONDUCT.md) for the project's Code of Conduct.

## License

Licensed under either of

  * [Apache License, Version 2.0](LICENSE-APACHE)
  * [MIT license](LICENSE-MIT)
 
at your option.
