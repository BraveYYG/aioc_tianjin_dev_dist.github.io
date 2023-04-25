# Draco 3D Data Compression

<!-- Draco是一个用于压缩和解压缩3D几何网格和点云的开源库 它旨在改善3D图形的存储和传输 -->
Draco is an open-source library for compressing and decompressing 3D geometric meshes and point clouds. It is intended to improve the storage and transmission of 3D graphics.

[Website](https://google.github.io/draco/) | [GitHub](https://github.com/google/draco)

## Contents

<!-- 这个文件夹包含3个实用程序 -->
This folder contains three utilities:

<!-- Emscripten 编译解码器 兼容任何现代浏览器 -->
* `draco_decoder.js` — Emscripten-compiled decoder, compatible with any modern browser.
<!-- WebAssembly 解码器，兼容较新的浏览器和设备 WebAssembly(web组装) -->
* `draco_decoder.wasm` — WebAssembly decoder, compatible with newer browsers and devices.
<!-- WASM解码器的JavaScript包装器 WASM(WebAssembly)的缩写 -->
* `draco_wasm_wrapper.js` — JavaScript wrapper for the WASM decoder.

<!-- 每一个文件提供两个变体 -->
Each file is provided in two variations:

<!-- 默认 最后的稳定构建 跟踪地址 -->
* **Default:** Latest stable builds, tracking the project's [master branch](https://github.com/google/draco).
<!-- 构建目标通过 glTF网格压缩扩展                                                                                                                                        追踪相应的Draco分支 -->
* **glTF:** Builds targeted by the [glTF mesh compression extension](https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression)tracking the [corresponding Draco branch](https://github.com/google/draco/tree/gltf_2.0_draco_extension).

<!-- 任何一种变化都可以与THREE一起使用  -->
Either variation may be used with `THREE.DRACOLoader`:

```js
// 设置解码器的路径
THREE.DRACOLoader.setDecoderPath('path/to/decoders/');
// 设置解码器的配置语言为 js
THREE.DRACOLoader.setDecoderConfig({type: 'js'}); // (Optional) Override detection of WASM support.
var dracoLoader = new THREE.DRACOLoader();
```

<!-- 进一步查阅 -->
Further [documentation on GitHub](https://github.com/google/draco/tree/master/javascript/example#static-loading-javascript-decoder).

## License

[Apache License 2.0](https://github.com/google/draco/blob/master/LICENSE)
