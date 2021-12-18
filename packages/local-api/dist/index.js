"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const path_1 = __importDefault(require("path"));
const cells_1 = require("./routes/cells");
const serve = (port, filename, dir, useProxy) => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    app.use((0, cells_1.createCellsRouter)(filename, dir));
    if (useProxy) {
        app.use((0, http_proxy_middleware_1.createProxyMiddleware)({
            target: 'http://localhost:3000',
            ws: true,
            logLevel: 'silent'
        }));
    }
    else {
        const packagePath = require.resolve('@al777/local-client/build/index.html');
        app.use(express_1.default.static(path_1.default.dirname(packagePath)));
    }
    return new Promise((resolve, reject) => {
        return app.listen(port, resolve).on('error', reject);
    });
});
exports.serve = serve;
