# bzflipper
## A Hypixel Skyblock bazaar flipping helper.

![Example image](https://i.imgur.com/pF8dh3x.png)

With this module, you can bazaar flip more efficiently.

To use it, simply run `/bzf find`. It will then find the most profitable bazaar flip that is currently undersupplied, and will display it to you.

If you know exactly what you want to make, you just want to know what the ideal method of obtaining it is, you can use `/bzf set <item name>`.

## Building
Compilation relies on some shell scripts, so you need to use WSL/macOS/Linux

```sh
cd data
npm install
./generate.sh
cd ..
npm install
./build.sh
```

---

Depends on [ChatTriggers](https://www.chattriggers.com/)