self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
});
self.addEventListener('activate', (event) => {
    console.log("Service worker actived");
    // const cacheWhitelist = ['my-cache']; // Danh sách cache cần giữ lại
    // event.waitUntil(
    //     caches.keys().then((cacheNames) => {
    //         return Promise.all(
    //             cacheNames.map((cacheName) => {
    //                 if (!cacheWhitelist.includes(cacheName)) {
    //                     return caches.delete(cacheName); // Xóa cache không còn cần thiết
    //                 }
    //             })
    //         );
    //     })
    // );
});
const imports = {
    wbg: {
        __wbindgen_object_drop_ref: (ptr) => {
            // Logic để xử lý tham chiếu đối tượng
        },
        __wbindgen_string_get: (ptr, len) => {
            return getStringFromMemory(ptr, len);
        },
        __wbindgen_string_new: (ptr, len) => {
            return new TextDecoder().decode(new Uint8Array(imports.wbg.memory.buffer, ptr, len));
        },
        __wbindgen_is_object: (ptr) => {
            return ptr !== 0 ? 1 : 0;
        },
        __wbindgen_is_undefined: (ptr) => {
            return ptr === 0 ? 1 : 0; // Trả về 1 nếu là undefined
        },
        __wbindgen_in: (argPtr, len) => {
            // Logic để xử lý dữ liệu vào
            const data = new Uint8Array(imports.wbg.memory.buffer, argPtr, len);
            return argPtr; // Trả về pointer hoặc giá trị tương ứng
        },
        __wbindgen_is_bigint: (ptr) => {
            return typeof ptr === 'bigint' ? 1 : 0; // Trả về 1 nếu là BigInt
        },
        __wbindgen_bigint_from_u64: (value) => {
            return BigInt(value);
        },
        __wbindgen_jsval_eq: (aPtr, bPtr) => {
            // So sánh hai giá trị
            return aPtr === bPtr ? 1 : 0; // Trả về 1 nếu hai giá trị bằng nhau
        },
        __wbindgen_error_new: (ptr, len) => {
            // Xử lý tạo lỗi ở đây
            // const errorMessage = new TextDecoder('utf-8').decode(new Uint8Array(memory.buffer, ptr, len));
            return false
        },
        __wbg_crypto_1d1f22824a6a080c: () => {
            return crypto; // Trả về đối tượng crypto của trình duyệt
        },
        __wbindgen_is_string: (arg) => {
            return typeof arg === 'string' ? 1 : 0; // Trả về 1 nếu là chuỗi, 0 nếu không
        },
        __wbg_process_4a72847cc503995b: () => { /* Không có xử lý cho trình duyệt */ },
        __wbg_versions_f686565e586dd935: () => ({ node: 'v14.17.0', v8: '8.4.371' }), // Ví dụ trả về
        __wbg_node_104a2ff8d6ea03a2: () => { return {}; }, // Trả về đối tượng trống
        __wbg_require_cca90b1a94a0255b: (moduleNamePtr, moduleNameLen) => {
            const moduleName = getStringFromMemory(moduleNamePtr, moduleNameLen); // Giả định bạn có hàm này
            return require(moduleName); // Nếu sử dụng Node.js
        },
        __wbindgen_is_function: (arg) => {
            return typeof arg === 'function' ? 1 : 0; // Trả về 1 nếu là hàm, 0 nếu không
        },
        __wbg_msCrypto_eb05e62b530a1508: () => {
            // Trả về msCrypto nếu có, nếu không trả về null
            return (typeof msCrypto !== 'undefined') ? msCrypto : null;
        },
        __wbg_randomFillSync_5c9c955aa56b6049: (bufferPtr, byteLength) => {
            const buffer = new Uint8Array(memory.buffer, bufferPtr, byteLength);
            // Sử dụng crypto.getRandomValues để điền số ngẫu nhiên vào buffer
            crypto.getRandomValues(buffer);
        },
        __wbg_getRandomValues_3aa56aa6edec874c: (bufferPtr, byteLength) => {
            const buffer = new Uint8Array(memory.buffer, bufferPtr, byteLength);
            // Sử dụng crypto.getRandomValues để điền số ngẫu nhiên vào buffer
            crypto.getRandomValues(buffer);
        },
        __wbindgen_jsval_loose_eq: (aPtr, bPtr) => {
            // Giả sử aPtr và bPtr là con trỏ đến các giá trị JavaScript
            // Bạn cần phải lấy giá trị từ bộ nhớ và so sánh chúng

            const a = getJsValue(aPtr); // Hàm lấy giá trị JS từ con trỏ
            const b = getJsValue(bPtr);
            return a === b ? 1 : 0; // Trả về 1 nếu bằng, 0 nếu không
        },
        __wbindgen_boolean_get: (ptr) => {
            // Giả sử ptr là con trỏ đến một giá trị boolean trong bộ nhớ
            // Bạn cần lấy giá trị boolean từ bộ nhớ
            return memory[ptr] ? 1 : 0; // Trả về 1 nếu true, 0 nếu false
        },
        __wbindgen_number_get: (ptr, outPtr) => {
            // Giả sử ptr là con trỏ đến một giá trị số trong bộ nhớ
            const value = memory.getFloat64(ptr); // Hoặc getInt32, tùy thuộc vào loại dữ liệu
            memory.setFloat64(outPtr, value); // Lưu giá trị vào outPtr
        },
        __wbindgen_as_number: (ptr) => {
            // Giả sử ptr là con trỏ đến một giá trị trong bộ nhớ
            const value = memory.getFloat64(ptr); // Hoặc getInt32, tùy thuộc vào loại dữ liệu
            return value; // Trả về giá trị số
        },
        __wbg_String: (ptr, len) => {
            const memoryArray = new Uint8Array(memory.buffer, ptr, len);
            const string = new TextDecoder("utf-8").decode(memoryArray);
            return string; // Trả về chuỗi
        },
        __wbg_String_b9412f8799faab3e: (ptr, len) => {
            const stringBytes = new Uint8Array(memory.buffer, ptr, len);
            const string = new TextDecoder("utf-8").decode(stringBytes);
            console.log(string); // In chuỗi ra console hoặc xử lý nó theo cách bạn muốn
        },
        __wbindgen_number_new: (value) => {
            return value; // Trả về giá trị số mà bạn nhận được
        },
        __wbindgen_object_clone_ref: (objPtr) => {
            // Lấy đối tượng từ con trỏ và nhân bản nó
            const obj = getObject(objPtr); // Hàm để lấy đối tượng từ con trỏ
            return addObject(Object.assign({}, obj)); // Nhân bản đối tượng và lưu vào bộ nhớ
        },

        __wbindgen_object_drop_ref: (objPtr) => {
            // Giải phóng bộ nhớ cho đối tượng
            const obj = getObject(objPtr);
            objects.delete(objPtr); // Xóa đối tượng khỏi danh sách
        },

        __wbindgen_is_object: (objPtr) => {
            return typeof getObject(objPtr) === "object" ? 1 : 0;
        },
        __wbg_getwithrefkey_edc2c8960f0f1191: (objPtr, keyPtr) => {
            const obj = getObject(objPtr); // Lấy đối tượng từ con trỏ
            const key = getObject(keyPtr); // Lấy khóa từ con trỏ
            if (obj && typeof obj === "object") {
                return addObject(obj[key]); // Lấy giá trị theo khóa và lưu vào bộ nhớ
            }
            return 0; // Trả về 0 nếu không có đối tượng hoặc không phải là object
        },
        __wbg_set_f975102236d3c502: (objPtr, keyPtr, valuePtr) => {
            const obj = getObject(objPtr); // Lấy đối tượng từ con trỏ
            const key = getObject(keyPtr); // Lấy khóa từ con trỏ
            const value = getObject(valuePtr); // Lấy giá trị từ con trỏ

            if (obj && typeof obj === "object") {
                obj[key] = value; // Thiết lập giá trị cho khóa trong đối tượng
            }
        },
        __wbg_get_3baa728f9d58d3f6: (objPtr, keyPtr) => {
            const obj = getObject(objPtr); // Lấy đối tượng từ con trỏ
            const key = getObject(keyPtr); // Lấy khóa từ con trỏ

            if (obj && typeof obj === "object") {
                return addObject(obj[key]); // Trả về giá trị cho khóa
            }
            return 0; // Trả về 0 nếu không tìm thấy giá trị
        },
        __wbg_length_ae22078168b726f5: (objPtr) => {
            const obj = getObject(objPtr); // Lấy đối tượng từ con trỏ
            if (obj && Array.isArray(obj)) {
                return obj.length; // Trả về độ dài của mảng
            }
            return 0; // Trả về 0 nếu không phải là mảng
        },
        __wbg_newnoargs_76313bd6ff35d0f2: (classPtr) => {
            const Class = getObject(classPtr); // Lấy lớp từ con trỏ
            if (typeof Class === 'function') {
                return addObject(new Class()); // Tạo đối tượng mới và thêm vào quản lý
            }
            return 0; // Trả về 0 nếu không hợp lệ
        },
        __wbg_newnoargs_76313bd6ff35d0f2: (classPtr) => {
            const Class = getObject(classPtr); // Lấy lớp từ con trỏ
            if (typeof Class === 'function') {
                return addObject(new Class()); // Tạo đối tượng mới và thêm vào quản lý
            }
            return 0; // Trả về 0 nếu không hợp lệ
        },
        __wbg_next_de3e9db4440638b2: (iteratorPtr) => {
            const iterator = getObject(iteratorPtr); // Lấy iterator từ con trỏ
            if (typeof iterator.next === 'function') {
                const result = iterator.next();
                const valuePtr = addObject(result.value); // Thêm giá trị vào quản lý
                return valuePtr; // Trả về giá trị
            }
            return 0; // Trả về 0 nếu không hợp lệ
        },
        __wbg_next_f9cb570345655b9a: (iteratorPtr) => {
            const iterator = getObject(iteratorPtr); // Lấy iterator từ con trỏ
            if (typeof iterator.next === 'function') {
                const result = iterator.next();
                const valuePtr = addObject(result.value); // Thêm giá trị vào quản lý
                return valuePtr; // Trả về giá trị
            }
            return 0; // Trả về 0 nếu không hợp lệ
        },
        __wbg_done_bfda7aa8f252b39f: (iteratorPtr) => {
            const iterator = getObject(iteratorPtr);
            if (iterator && typeof iterator.done === 'boolean') {
                return iterator.done ? 1 : 0; // Trả về 1 nếu done là true, ngược lại trả về 0
            }
            return 0; // Trả về 0 nếu không hợp lệ
        },
        __wbg_value_6d39332ab4788d86: (iteratorPtr) => {
            const iterator = getObject(iteratorPtr);
            if (iterator && typeof iterator.value !== 'undefined') {
                return addObject(iterator.value); // Giả định value là một đối tượng có thể thêm vào map
            }
            return 0; // Trả về 0 nếu không hợp lệ
        },
        __wbg_iterator_888179a48810a9fe: () => {
            // Giả định bạn có một iterator mà bạn muốn trả về
            const iterator = createIterator(); // Hàm này giả định bạn đã định nghĩa
            return addObject(iterator); // Thêm iterator vào map và trả về ID
        },
        __wbg_get_224d16597dbbfd96: (objId, keyId) => {
            const obj = getObject(objId); // Lấy đối tượng từ ID
            const key = getObject(keyId); // Lấy khóa từ ID

            // Kiểm tra xem obj có phải là một đối tượng không
            if (obj !== undefined && typeof obj === 'object') {
                // Trả về giá trị tương ứng với key
                return addObject(obj[key]); // Giả định key là một chuỗi
            }
            return 0; // Nếu không tìm thấy, trả về 0 hoặc một giá trị mặc định
        },
        __wbg_call_1084a111329e68ce: (funcId, argId) => {
            const func = getObject(funcId); // Lấy hàm từ ID
            const arg = getObject(argId); // Lấy đối số từ ID

            // Kiểm tra xem func có phải là một hàm không
            if (typeof func === 'function') {
                return addObject(func(arg)); // Thực hiện cuộc gọi và trả về giá trị
            }
            throw new Error("Not a callable function");
        },
        __wbg_new_525245e2b9901204: () => {
            // Tạo một đối tượng mới, ví dụ như một đối tượng JavaScript
            const obj = {}; // Hoặc sử dụng một lớp cụ thể
            return addObject(obj); // Trả về ID của đối tượng
        },
        __wbg_self_3093d5d1f7bcb682: () => {
            // Trả về đối tượng global 'self'
            return self;
        },
        __wbg_window_3bcfc4d31bc012f8: () => {
            // Trả về đối tượng global 'window'
            return window;
        },
        __wbg_globalThis_86b222e13bdf32ed: () => {
            // Trả về globalThis
            return globalThis;
        },
        __wbg_global_e5a3fe56f8be9485: () => {
            // Trả về đối tượng global
            return global;
        },
        __wbg_instanceof_ArrayBuffer_61dfc3198373c902: (obj) => {
            return obj instanceof ArrayBuffer;
        },
        __wbg_call_89af060b4e1523f2: (func, thisArg, ...args) => {
            return func.apply(thisArg, args);
        },
        __wbg_isSafeInteger_7f1ed56200d90674: (value) => {
            return Number.isSafeInteger(value);
        },
        __wbg_entries_7a0e06255456ebcd: (obj) => {
            return Object.entries(obj); // hoặc cách xử lý khác tùy vào yêu cầu
        },
        __wbg_buffer_b7b08af79b0b0974: (obj) => {
            return obj.buffer; // Trả về buffer của đối tượng
        },
        __wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9: (bufferPtr, byteOffset, length) => {
            const buffer = getObject(bufferPtr); // Hàm để lấy đối tượng từ pointer
            return new Uint8Array(buffer, byteOffset, length); // Ví dụ với Uint8Array
        },
        __wbg_new_ea1883e1e5e86686: () => {
            return new SomeObject(); // Thay đổi SomeObject thành loại đối tượng bạn cần tạo.
        },
        __wbg_alert: (msgPtr, msgLen) => {
            const msg = new TextDecoder('utf-8').decode(new Uint8Array(memory.buffer, msgPtr, msgLen));
            alert(msg);
        },
        __wbg_set_d1e79e2388520f18: (arg1, arg2) => {
            // Logic của hàm ở đây
        },
        __wbg_length_8339fcf5d8ecd12e: (arg) => {
            // Logic của hàm ở đây
            return arg.length; // Ví dụ trả về độ dài
        },
        __wbg_instanceof_Uint8Array_247a91427532499e: (arg) => {
            return arg instanceof Uint8Array;
        },
        __wbg_instanceof_Uint8Array_247a91427532499e: (arg) => {
            return arg instanceof Uint8Array;
        },
        __wbg_newwithlength_ec548f448387c968: (length) => {
            return new Uint8Array(length);
        },
        __wbg_subarray_7c2e3576afe181d1: (array, begin, end) => {
            return array.subarray(begin, end);
        },
        __wbindgen_bigint_get_as_i64: (bigIntPtr) => {
            const bigint = BigInt(bigIntPtr); // Chuyển đổi con trỏ thành BigInt
            return Number(bigint); // Chuyển đổi BigInt thành số
        },
        __wbindgen_debug_string: (ptr, len) => {
            // Lấy chuỗi từ con trỏ
            const str = getStringFromWasm(ptr, len); // Hàm này cần phải được định nghĩa để lấy chuỗi từ bộ nhớ WebAssembly
            console.log(str); // Hoặc xử lý chuỗi theo cách khác
        },
        __wbindgen_debug_string: (ptr, len) => {
            // Lấy chuỗi từ con trỏ
            const str = getStringFromWasm(ptr, len); // Hàm này cần phải được định nghĩa để lấy chuỗi từ bộ nhớ WebAssembly
            console.log(str); // Hoặc xử lý chuỗi theo cách khác
        },
        __wbindgen_throw: (ptr, len) => {
            const message = getStringFromWasm(ptr, len);
            throw new Error(message); // Ném ngoại lệ với thông điệp
        },
        __wbindgen_throw: (ptr, len) => {
            const message = getStringFromWasm(ptr, len);
            throw new Error(message);
        },
        __wbindgen_memory: () => imports.env.memory,
        __wbindgen_throw: (ptr, len) => {
            const message = getStringFromWasm(ptr, len);
            throw new Error(message);
        },
        memory: new WebAssembly.Memory({ initial: 256 }),
    },
};

function getStringFromWasm(ptr, len) {
    const memory = new Uint8Array(imports.env.memory.buffer);
    return new TextDecoder('utf-8').decode(memory.subarray(ptr, ptr + len));
}


function getStringFromMemory(ptr, len) {
    const memoryArray = new Uint8Array(imports.wbg.memory.buffer);
    return new TextDecoder().decode(memoryArray.subarray(ptr, ptr + len));
}

// Fetch và instantiate như trước
fetch('https://telegram.blum.codes/_dist/game_wasm_bg-BnV071fP.wasm')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.arrayBuffer();
    })
    .then(buffer => {
        return WebAssembly.instantiate(buffer, imports)
    })
    .then(({ instance }) => {
        const { encrypt } = instance.exports;
        console.log(instance.exports);

        const payload = { key1: "value1", key2: "value2" };
        const encoder = new TextEncoder();
        // const dataToEncrypt = encoder.encode(JSON.stringify(payload));

        // const encryptedData = encrypt(dataToEncrypt);
        // console.log('Encrypted Data:', encryptedData);
    })
    .catch(error => {
        console.error('Error:', error);
    });


async function createPayload() {
    // Giả sử bạn gọi các hàm WebAssembly
    const errorMessage = imports.wbg.__wbindgen_error_new("Some error");
    const randomValues = new Uint8Array(10);
    imports.wbg.__wbg_randomFillSync(randomValues);

    // Bước 1: Tạo đối tượng payload
    const payload = {
        error: errorMessage,
        randomValues: Array.from(randomValues) // Chuyển đổi thành mảng
    };
    console.log(payload);

    // Bước 2: Mã hóa thành JSON
    const jsonPayload = JSON.stringify(payload);
    console.log(jsonPayload);
}

// Gọi hàm
createPayload();
