import { buildHeader } from "./createHtml/buildHeader.js";
import { buildShopingList } from "./createHtml/buildShopingList.js";
import { getAccountApi } from "./service/getAccountApi.js";

buildHeader(JSON.parse(localStorage.getItem("account")));

// buildShopingList(getAccount(JSON.parse(localStorage.getItem("account")).id));

getAccountApi(JSON.parse(localStorage.getItem("account")).id).then((data) => {
    buildShopingList(data);
    console.log(1)
});