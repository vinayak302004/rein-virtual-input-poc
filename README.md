# Rein Virtual Input PoC

## 🚀 Overview

This project is a Proof of Concept (PoC) demonstrating how to replace Nut.js with kernel-level virtual input devices.

Current approaches rely on high-level automation libraries, which have limitations such as:

* Poor compatibility with Wayland
* Non-native input behavior
* Limited gesture support

This PoC validates a better approach using **native OS input subsystems**.

---

## 🎯 Objective

To demonstrate that input events (mouse movement, scrolling) can be injected at the **kernel level**, allowing the system to treat them as real hardware input instead of simulated API calls.

---

## 🏗️ Architecture

![Architecture Diagram](assets/architecture.png)

---

## ⚙️ Technologies Used

* Node.js
* koffi (FFI bindings)
* C (for native input implementation)
* Linux `uinput` (virtual input subsystem)

---

## ✅ Features

* Virtual mouse device creation at kernel level
* Cursor movement using relative motion
* Scroll event support
* Native OS-level input handling
* No dependency on high-level automation libraries

---

## 🧪 How It Works

* A virtual input device is created using Linux `uinput`
* Native C functions inject input events (REL_X, REL_Y, REL_WHEEL)
* Node.js calls these functions using FFI via koffi
* The OS processes these events as real hardware input

---

## ⚙️ Setup & Run

### 1. Install dependencies

```bash
sudo apt update
sudo apt install build-essential nodejs npm
```

### 2. Compile the C library

```bash
gcc -shared -o libvmouse.so -fPIC src/virtual_mouse.c
```

### 3. Install Node dependencies

```bash
npm install
```

### 4. Enable uinput

```bash
sudo modprobe uinput
sudo chmod 666 /dev/uinput
```

### 5. Run the PoC

```bash
node src/index.js
```

---

## 🎥 Demo

https://drive.google.com/file/d/1Q3G8c11QdrItyazoEQBhA2vQPaWUEBUX/view?usp=sharing

---

## 🎯 Results

* Cursor movement is successfully controlled via a virtual input device
* Input is handled natively by the OS
* Confirms feasibility of replacing NutJS with kernel-level approach

---

## 🔮 Future Scope

* Multi-touch gesture support (trackpad simulation)
* Keyboard input support
* Cross-platform implementation (Windows/macOS)
* Gamepad/controller input support

---

## 🧠 Key Insight

This PoC demonstrates that:

> Kernel-level virtual input can replace high-level automation libraries and provide better compatibility, especially with modern display systems like Wayland.

---

## 📌 Repository

https://github.com/vinayak302004/rein-virtual-input-poc

---

## 🙌 Acknowledgment

Developed as part of exploration for improving input handling in Rein (AOSSIE GSoC 2026).
