import RequestBuilder from "./index";

const requset = new RequestBuilder().forUrl("www.myurl.com")
    .useMethod("GET")
    .payload({test: "test"})
    .build();

console.log(requset);
