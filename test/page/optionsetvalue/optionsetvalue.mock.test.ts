/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

/// <reference path="../../../src/page/optionsetvalue/optionsetvalue.mock.ts" />

describe('Xrm.Page.OptionSetValue Mock', () => {
    beforeEach(() => {
        this.optionSetValue = new OptionSetValueMock('statecode', 0);
    });

    it('should instantiate', () => {
        expect(this.optionSetValue).toBeDefined();
    })

    it('should have a text property of statecode', () => {
        expect(this.optionSetValue.text).toBe('statecode');
    });

    it('should have a value property of 0', () => {
        expect(this.optionSetValue.value).toBe(0);
    });
});