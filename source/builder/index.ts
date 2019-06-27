import {IRequest} from "./interfaces";

class Request implements IRequest {
    public url: string;
    public method: string;
    public payload: object;
}

class RequestBuilder {
    protected request: IRequest;

    constructor() {
        this.request = new Request();
    }

    public forUrl(url: string) {
        this.request.url = url;
        return this;
    }

    public useMethod(method: string) {
        this.request.method = method;
        return this;
    }

    public payload(payload: object) {
        this.request.payload = payload;
        return this;
    }

    public build() {
        return this.request;
    }

}

export default RequestBuilder;
