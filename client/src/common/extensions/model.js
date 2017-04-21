/**
 * Created by puran.kanawat on 21/04/17.
 */
import RequestHelper from "blinx_extensions/request-ext";

function Model(config) {
    this.fetchApi = config.fetchApi;
    this.updateApi = config.updateApi;
    this.updateWithPutApi = config.updateWithPutApi;
    this.deleteApi = config.deleteApi;
    this.value = null;
}

Model.prototype = (function () {

    function fetch(params, options) {
        var self = this;

        return RequestHelper.getJSON(this.fetchApi, params, options).then(function (data) {
            self.value = data;
            return data;
        });
    }

    function update(payload, options, params) {
        var url;

        if (params) {
            url = this.updateApi + '?' + RequestHelper.getQueryStringForObject(params);
        } else {
            url = this.updateApi;
        }

        return RequestHelper.postJSON(url, payload, options);
    }

    function updateWithPut(payload, options, params) {
        var url;

        if (params) {
            url = this.updateWithPutApi + '?' + RequestHelper.getQueryStringForObject(params);
        } else {
            url = this.updateWithPutApi;
        }

        return RequestHelper.putJSON(url, payload, options);
    }

    function del(payload, options, params) {
        var url;

        if (params) {
            url = this.deleteApi + '?' + RequestHelper.getQueryStringForObject(params);
        } else {
            url = this.deleteApi;
        }
        return RequestHelper.deleteJSON(url, payload, options);
    }

    function getCanceller() {
        var canceller = {};
        var promise = new Promise(function (resolve, reject) {
            canceller.reject = reject;
            canceller.resolve = resolve;
        });

        canceller.promise = promise;
        return canceller;
    }

    return {
        fetch: fetch,
        update: update,
        updateWithPut: updateWithPut,
        del: del,
        getCanceller: getCanceller
    };
})();

export default Model;