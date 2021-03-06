var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports", "../../misc/misc", "../createElement", "../StatelessComponent", "fs", "../util/Bind", "../renderInHtml"], function (require, exports, misc_1, createElement_1, StatelessComponent_1, fs_1, Bind_1, renderInHtml_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function cssTest1() {
        var Comp = function () { return createElement_1.ReactLike.createElement("div", { className: "apple", style: { border: '1 px solid pink', background: 'blue' } }, "i'm pink"); };
        var Main = function () { return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement(Comp, null)); };
        var s = createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(Main, null), { indent: true });
        console.log(s);
    }
    //@ts-ignore
    // var GLOBAL = global
    function reactLikeText() {
        var Apple = function (props) { return createElement_1.ReactLike.createElement("div", { className: "apple" },
            "I'm a ",
            props.apple.color,
            " apple"); };
        var List = function (props) { return createElement_1.ReactLike.createElement("ul", null); };
        var Main = function (props) { return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("h1", null, "A list of apples"),
            createElement_1.ReactLike.createElement(List, null, props.apples.map(function (a) { return createElement_1.ReactLike.createElement(Apple, { apple: a }); }))); };
        var apples = [{ color: 'red' }, { color: 'blue' }];
        // console.log(ReactLike.render(<Main apples={apples}></Main>, { indent: true }));
    }
    exports.reactLikeText = reactLikeText;
    function statelessComponentTest() {
        var Person = /** @class */ (function (_super) {
            __extends(Person, _super);
            function Person() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(Person.prototype, "domContext", {
                get: function () {
                    return __assign({}, this, { props: this.props });
                },
                enumerable: true,
                configurable: true
            });
            Person.prototype.render = function () {
                return createElement_1.ReactLike.createElement("div", null,
                    createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                        } }),
                    createElement_1.ReactLike.createElement("div", null,
                        "Name: ",
                        this.props.name),
                    createElement_1.ReactLike.createElement("div", null,
                        "Friends:",
                        createElement_1.ReactLike.createElement("ul", null, this.props.friends.map(function (f) { return createElement_1.ReactLike.createElement(Person, { name: f.name, friends: f.friends }); }))));
            };
            return Person;
        }(StatelessComponent_1.StatelessComponent));
        var p0 = { name: 'flo', friends: [] };
        var p1 = { name: 'seba', friends: [p0] };
        var persons = [p0, p1];
        var main = createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("p", null, "Some people:"),
            persons.map(function (p) { return createElement_1.ReactLike.createElement(Person, { name: p.name, friends: p.friends }); }),
            createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                } }, "click me"));
        fs_1.writeFileSync('src/jsx/__tests__/test.html', renderInHtml_1.renderInHTMLDocument(main));
        // console.log(ReactLike.render(main, { indent: true }));
    }
    exports.statelessComponentTest = statelessComponentTest;
    // statelessComponentTest()
    // console.log(printObjectAndScope(ReactLike));
    function functionAttributes() {
        var main = createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("button", { onClick: function (e) { alert('foo'); } }, "click me"),
            createElement_1.ReactLike.createElement("button", { onClick: function (e) { alert("foo\nhello"); } }, "click me22"));
        // const s = ReactLike.render(main, { indent: true })
        fs_1.writeFileSync('src/jsx/__tests__/test.html', renderInHtml_1.renderInHTMLDocument(main));
        // console.log(s);
    }
    exports.functionAttributes = functionAttributes;
    function moreOnCss() {
        var button = {
            border: '2px solid pink',
            padding: '5px'
        };
        // this class extends another:
        var primaryButton = __assign({}, button, { color: 'red', fontWeight: 'bolder' });
        var styles = {
            button: button,
            primaryButton: primaryButton
        };
        // this tag will force users to use discrete classNames only
        var Button = function (props) { return createElement_1.ReactLike.createElement("button", { className: props.className || '' }); };
        var main = createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement(Button, { className: "button" }, "click me"));
        // this will render the <style> tag with all classes and styles inside.
        var Styles = createElement_1.ReactLike.createElement("style", null, Object.keys(styles).map(function (c) {
            return misc_1.indent(1) + "." + c + ": {\n" + Object.keys(styles[c]).map(function (p) { return "" + misc_1.indent(2) + p + ": " + styles[c][p] + ";"; }).join("\n") + "\n" + misc_1.indent(1) + "}";
        }).join('\n'));
        var s = "\n" + createElement_1.ReactLike.render(Styles, { indent: true }) + "\n" + createElement_1.ReactLike.render(main, { indent: true }) + "\n";
        // console.log(s);
    }
    exports.moreOnCss = moreOnCss;
    // moreOnCss()
    function customComponentAffectChild() {
        var Data = /** @class */ (function (_super) {
            __extends(Data, _super);
            function Data() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Data.prototype.render = function () {
                var el = createElement_1.ReactLike.createElement("span", null);
                // if(!this.props.children){return el }
                this.addDataToChildren('addedfromparent', misc_1.escapeHtmlAttribute(JSON.stringify(this.props.data)), this.props);
                return el;
            };
            Data.prototype.addDataToChildren = function (dataName, data, props) {
                this.childrenElementsAsArray().forEach(function (c) {
                    c.attrs["data-" + dataName] = data;
                });
            };
            return Data;
        }(StatelessComponent_1.StatelessComponent));
        var main = createElement_1.ReactLike.createElement(Data, { data: { g: 'asd' } },
            createElement_1.ReactLike.createElement("span", { className: "child1" }, "hello"));
        console.log(createElement_1.ReactLike.render(main, { indent: true }));
        var BindInputValue = /** @class */ (function (_super) {
            __extends(BindInputValue, _super);
            function BindInputValue() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BindInputValue.prototype.render = function () {
                BindInputValue.checkRegisteredCode();
                var c = this.firstChildElement();
                if (c && c.tag === 'input') {
                    c.attrs['data-bind-value-id'] = 'bind-value-' + BindInputValue.counter++;
                }
                return createElement_1.ReactLike.createElement("span", null);
            };
            BindInputValue.checkRegisteredCode = function () {
                function getBindInputValue(id) {
                    var el = document.querySelector("[data-bind-value-id]=\"" + id + "\"");
                    if (el) {
                        return el.value;
                    }
                }
                if (!BindInputValue.registered) {
                    createElement_1.ReactLike.registerClientCode({
                        name: 'BindInputValue',
                        code: getBindInputValue.toString(),
                        description: "Gets the current input value declared with wrapper <BindInputValue><input..."
                    });
                    BindInputValue.registered = true;
                }
            };
            BindInputValue.counter = 0;
            BindInputValue.registered = false;
            return BindInputValue;
        }(StatelessComponent_1.StatelessComponent));
        var test = createElement_1.ReactLike.createElement(BindInputValue, { bindId: "id1" },
            createElement_1.ReactLike.createElement("input", null));
        var s = createElement_1.ReactLike.render(test, { indent: true });
        // console.log(s, ReactLike.getClientCode().map(c => c.code).join('\n'));
        // writeFileSync('src/jsx/__tests__/test.html',renderInHTMLDocument(test))
    }
    exports.customComponentAffectChild = customComponentAffectChild;
    function testBind() {
        var Custom = /** @class */ (function (_super) {
            __extends(Custom, _super);
            // stateGet(s:string):Raro
            function Custom(props, state) {
                var _this = _super.call(this, props) || this;
                _this.state = state;
                _this.state = __assign({}, _this.state, _this.props);
                return _this;
            }
            Custom.prototype.setState = function (state) {
                this.state = state;
                if (this._rootEl) {
                    renderInHtml_1.setInnerHTML(this._rootEl, createElement_1.ReactLike.render(this, this._renderConfig || {}));
                }
            };
            Custom.prototype.getState = function () {
                return this.state;
            };
            Custom.prototype.render = function () {
                return createElement_1.ReactLike.createElement("p", null, this.state.value);
            };
            return Custom;
        }(StatelessComponent_1.StatelessComponent));
        var Bind2 = /** @class */ (function (_super) {
            __extends(Bind2, _super);
            function Bind2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Bind2.prototype.render = function () {
                var e = _super.prototype.render.call(this);
                if (!this.props.data && this.props.name && this.props.onChange) {
                    var c = this.firstChildElement();
                    if (c) {
                        var id = "bind-input-value-element-" + Bind_1.Bind.counter++;
                        //     // if (typeof this.props.inputValue === 'undefined') {
                        //       // const c = this.firstChildElement()
                        //       // if (c) {
                        //         c.attrs[Bind.BIND_VALUE_ATTRIBUTE_NAME] = c.attrs[Bind.BIND_VALUE_ATTRIBUTE_NAME] || id
                        //     __BindInputValues[this.props.name] = __BindInputValues[this.props.name] || {}
                        //     __BindInputValues[this.props.name].onChange = this.props.onChange
                        //     // && __BindInputValues[this.props.name].onChange
                        //     c.attrs.onChange = (e: ChangeEvent<HTMLInputElement>)=>{
                        //       const onChange = __BindInputValues[this.props.name]&& __BindInputValues[this.props.name].onChange
                        //       if(onChange){
                        //         onChange(e)
                        //       }
                        //     }
                    }
                }
                // if(c){
                //   c.attrs.update = ()=>{
                //   }
                // }
                return e;
            };
            return Bind2;
        }(Bind_1.Bind));
        var obj = { foo: 1234, bar: [1, 2, 3, 4] };
        var m = createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement(Bind_1.Bind, { name: "1", data: obj }),
            createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                    var d = getBindDataOrThrow('1');
                    var v = getBindInputValue('i1');
                    alert(d.foo + " - " + v);
                } }, "click"),
            createElement_1.ReactLike.createElement(Bind_1.Bind, { name: "i1" },
                createElement_1.ReactLike.createElement("input", null)),
            createElement_1.ReactLike.createElement(Bind_1.Bind, { name: "2" },
                createElement_1.ReactLike.createElement("input", null)),
            "3333",
            createElement_1.ReactLike.createElement(Bind2, { name: "2", onChange: function (e) {
                    debugger;
                    // c.setState({...c.getState(), value: e.inputValue})
                } },
                createElement_1.ReactLike.createElement(Custom, { value: 'unknown' })),
            "bind2 idea!",
            createElement_1.ReactLike.createElement("input", null));
        // writeFileSync('src/jsx/__tests__/test.html', renderInHTMLDocument(m))
        // writeFileSync('src/jsx/__tests__/test.html',renderInHTMLDocument(test))
        // customComponentAffectChild()
    }
    exports.testBind = testBind;
});
// testBind()
