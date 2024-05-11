"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const http = __importStar(require("http"));
const podcasts_controller_1 = require("./controllers/podcasts-controller");
const http_methods_1 = require("./utils/http-methods");
const routes_1 = require("./routes/routes");
exports.app = http.createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Vai dividr a url em duas, antes do ? será a rota base e depois serão os queryStrings da rota
    const baseUrl = ((_a = req.url) === null || _a === void 0 ? void 0 : _a.split("?")[0]) || [""];
    // Definir rotas sem utilizar nenhum framework através do req.url
    if (req.method === http_methods_1.HttpMethodsEnum.GET && baseUrl === routes_1.Routes.LIST) {
        yield (0, podcasts_controller_1.getListEpisodes)(req, res);
    }
    if (req.method === http_methods_1.HttpMethodsEnum.GET && baseUrl === routes_1.Routes.EPISODE) {
        yield (0, podcasts_controller_1.getFilterEpisodes)(req, res);
    }
}));
