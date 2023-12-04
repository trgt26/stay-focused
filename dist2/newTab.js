"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var data_1 = __importDefault(require("./data"));
var Row_1 = __importDefault(require("react-bootstrap/Row"));
var Col_1 = __importDefault(require("react-bootstrap/Col"));
var styled_components_1 = __importDefault(require("styled-components"));
var d = Object.keys(data_1.default.prgrmWebsites);
d = d.sort();
console.table(d);
var LinkGroup = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color:black;\n    font-size: 25px;\n    color: white;\n    text-align:center;\n"], ["\n    background-color:black;\n    font-size: 25px;\n    color: white;\n    text-align:center;\n"])));
function Link(props) {
    var text = props.text;
    var link = props.link;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("a", { href: link }, text))));
}
function Links(_a) {
    var info = _a.info;
    var data = info;
    var keys = Object.keys(data);
    keys.sort();
    return (react_1.default.createElement("div", { id: "links" }, keys.map(function (key) {
        return (react_1.default.createElement(Link, { text: key, link: data[key] }));
    })));
}
var prgrmWebIdx = 0;
function ProgrammingWebsites(_a) {
    var total = _a.total, info = _a.info;
    var keys = Object.keys(info);
    keys.sort();
    if (total == -1) {
        keys = keys.slice(prgrmWebIdx);
    }
    else {
        keys = keys.slice(prgrmWebIdx, prgrmWebIdx + total);
    }
    prgrmWebIdx += total;
    console.warn(prgrmWebIdx);
    var curr = {};
    keys.map(function (k) {
        curr[k] = info[k];
    });
    console.warn(curr);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Links, { info: curr })));
}
function Work() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Row_1.default, null,
            react_1.default.createElement(Col_1.default, { className: 'more' },
                react_1.default.createElement(LinkGroup, null, " Work "),
                react_1.default.createElement(Links, { info: data_1.default.work })),
            react_1.default.createElement("div", { className: "col-4 " },
                react_1.default.createElement(LinkGroup, null, "Github"),
                react_1.default.createElement(Links, { info: data_1.default.github })))));
}
function PrgrmWebsites() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "special container-fluid mt-3" },
            react_1.default.createElement("div", { className: "row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}" },
                react_1.default.createElement(LinkGroup, null, "Programming Websites"),
                react_1.default.createElement("div", { className: "col-3 " },
                    react_1.default.createElement(ProgrammingWebsites, { info: data_1.default.prgrmWebsites, total: 25 })),
                react_1.default.createElement("div", { className: "col-3 " },
                    react_1.default.createElement(ProgrammingWebsites, { info: data_1.default.prgrmWebsites, total: 25 })),
                react_1.default.createElement("div", { className: "col-3 " },
                    react_1.default.createElement(ProgrammingWebsites, { info: data_1.default.prgrmWebsites, total: 25 })),
                react_1.default.createElement("div", { className: "col-3 " },
                    react_1.default.createElement(ProgrammingWebsites, { info: data_1.default.prgrmWebsites, total: -1 }))))));
}
function PrgrmSocial() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "col-6 " },
            react_1.default.createElement(LinkGroup, null, "Programming Social"),
            react_1.default.createElement(Links, { info: data_1.default.prgrmSocial }))));
}
react_dom_1.default.render(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(PrgrmWebsites, null),
    react_1.default.createElement(PrgrmSocial, null),
    react_1.default.createElement(Work, null),
    react_1.default.createElement("div", { className: "more container-fluid !direction !spacing text-center" },
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        react_1.default.createElement(Links, { info: data_1.default.Porgramming })),
    react_1.default.createElement("div", null,
        react_1.default.createElement("h3", null, "Drive"),
        react_1.default.createElement(Links, { info: data_1.default.sepcialFour }))), document.getElementById("root"));
var templateObject_1;
