define(["require", "exports", "../log/log"], function (require, exports, log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RecordBuilder = /** @class */ (function () {
        function RecordBuilder() {
        }
        RecordBuilder.prototype.extractRecord = function (config) {
            this.config = config;
            var r = config.record;
            var fields = this.extractFields(config);
            var sublists = this.extractSublists(config);
            return {
                id: r.id + '',
                name: r.type + '',
                fields: fields,
                sublists: sublists,
                type: r.type + ''
            };
        };
        RecordBuilder.prototype.extractFields = function (config) {
            var _this = this;
            var r = config.record;
            return r.getFields()
                .filter(function (f) { return config.fieldPredicate && config.fieldPredicate(f); })
                .map(function (fieldId) { return _this.extractField(config, fieldId); })
                .filter(function (f) { return !!f; });
        };
        RecordBuilder.prototype.extractField = function (config, fieldId) {
            var r = config.record;
            if (fieldId.indexOf('sys_') === 0) {
                return {
                    id: fieldId, type: 'text', isReadonly: false, isMandatory: false,
                };
            }
            var field = r.getField({ fieldId: fieldId });
            if (field) {
                return { id: field.id + '', name: field.label + '', isReadonly: !!field.isReadOnly, isMandatory: !!field.isMandatory, type: field.type + '', };
            }
            else {
                this.log('Cannot get record field (getField) with id ' + fieldId);
            }
        };
        RecordBuilder.prototype.log = function (s) {
            if (this.config && this.config.debug) {
                log_1.log(s);
            }
        };
        RecordBuilder.prototype.extractSublists = function (config) {
            var _this = this;
            var r = config.record;
            return r.getSublists()
                .map(function (sublistId) { return _this.extractSublist(config, sublistId); })
                .filter(function (s) { return !!s; });
        };
        RecordBuilder.prototype.extractSublist = function (config, sublistId) {
            var r = config.record;
            var name;
            try {
                var s = r.getSublist({ sublistId: sublistId });
                name = s && s.name;
            }
            catch (error) {
            }
            var fields = this.extractSublistFields(config, sublistId);
            return {
                id: sublistId, fields: fields, name: name
            };
        };
        RecordBuilder.prototype.extractSublistFields = function (config, sublistId) {
            var _this = this;
            var r = config.record;
            var sublistFields = [];
            try {
                sublistFields = r.getSublistFields({ sublistId: sublistId });
            }
            catch (error) {
                this.log('Exception when r.getSublistFields({ sublistId }) for sublistId==' + sublistId);
            }
            return sublistFields
                .filter(function (f) { return f.indexOf('sys_') !== 0; })
                .map(function (fieldId) { return _this.extractSublistField(config, sublistId, fieldId); });
        };
        RecordBuilder.prototype.extractSublistField = function (config, sublistId, fieldId) {
            var type;
            if (config.callGetSublistField) {
                try {
                    var lineCount = config.record.getLineCount({ sublistId: sublistId });
                    if (lineCount > 0) {
                        var f = config.record.getSublistField({ sublistId: sublistId, fieldId: fieldId, line: 0 });
                        // console.log({${f.}});
                        type = f.type;
                    }
                }
                catch (error) {
                }
            }
            return {
                id: fieldId,
                type: type
            };
        };
        return RecordBuilder;
    }());
    function getRecordTypeMetadata(config) {
        var builder = new RecordBuilder();
        return builder.extractRecord(config);
    }
    exports.getRecordTypeMetadata = getRecordTypeMetadata;
});
