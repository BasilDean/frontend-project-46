import { stylish } from "./formatters/stylish.js";

const formatters = (data, format) => {
    switch (format) {
        case 'stylish':
            return stylish(data);
    }
}

export { formatters };