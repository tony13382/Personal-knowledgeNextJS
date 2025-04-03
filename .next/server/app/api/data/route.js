/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/data/route";
exports.ids = ["app/api/data/route"];
exports.modules = {

/***/ "(rsc)/./app/api/data/route.js":
/*!*******************************!*\
  !*** ./app/api/data/route.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\nconst token = \"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\";\nconst headers = {\n    \"Authorization\": `Bearer ${token}`,\n    \"Notion-Version\": \"2021-05-13\",\n    \"Content-Type\": \"application/json\"\n};\nasync function fetchData(databaseId) {\n    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {\n        method: \"POST\",\n        headers: headers,\n        body: JSON.stringify({})\n    });\n    return await response.json();\n}\nasync function GET(request) {\n    const typeRes = await fetchData(\"1c657efa8a9b8038ac70f7eaec829ee3\");\n    const types = [\n        \"全部\"\n    ];\n    const typeIds = {};\n    typeRes.results.forEach((item)=>{\n        const name = item.properties[\"名稱\"].title[0].text.content;\n        types.push(name);\n        typeIds[item.id] = name;\n    });\n    // console.log(\"Types:\", types);\n    const tagRes = await fetchData(\"1c657efa8a9b807a88dfc2263c7e3ae6\");\n    const tags = [];\n    const tagIds = {};\n    tagRes.results.forEach((item)=>{\n        const name = item.properties[\"名稱\"].title[0].text.content;\n        tags.push(name);\n        tagIds[item.id] = name;\n    });\n    // console.log(\"Tags:\", tags);\n    const linkRes = await fetchData(\"1c657efa8a9b806fad54fa32a6a32100\");\n    const links = [];\n    linkRes.results.forEach((item)=>{\n        const name = item.properties[\"name\"].title[0].text.content;\n        const typesList = item.properties[\"type\"].relation.map((r)=>typeIds[r.id]);\n        const tagsList = item.properties[\"tags\"].relation.map((r)=>tagIds[r.id]);\n        const url = item.properties[\"url\"].url;\n        const cover = item.properties[\"cover\"].files[0].file.url;\n        links.push({\n            name: name,\n            type: typesList[0],\n            tags: tagsList,\n            url: url,\n            cover: cover\n        });\n    });\n    // console.log(\"Links:\", links);\n    return Response.json({\n        types: types,\n        tags: tags,\n        links: links\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2RhdGEvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFFBQVE7QUFDZCxNQUFNQyxVQUFVO0lBQ1osaUJBQWlCLENBQUMsT0FBTyxFQUFFRCxPQUFPO0lBQ2xDLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFFQSxlQUFlRSxVQUFVQyxVQUFVO0lBQy9CLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxDQUFDLG9DQUFvQyxFQUFFRixXQUFXLE1BQU0sQ0FBQyxFQUFFO1FBQ3BGRyxRQUFRO1FBQ1JMLFNBQVNBO1FBQ1RNLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQyxDQUFDO0lBQzFCO0lBQ0EsT0FBTyxNQUFNTCxTQUFTTSxJQUFJO0FBQzlCO0FBRU8sZUFBZUMsSUFBSUMsT0FBTztJQUM3QixNQUFNQyxVQUFVLE1BQU1YLFVBQVU7SUFDaEMsTUFBTVksUUFBUTtRQUFDO0tBQUs7SUFDcEIsTUFBTUMsVUFBVSxDQUFDO0lBQ2pCRixRQUFRRyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsQ0FBQUE7UUFDcEIsTUFBTUMsT0FBT0QsS0FBS0UsVUFBVSxDQUFDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPO1FBQ3hEVCxNQUFNVSxJQUFJLENBQUNMO1FBQ1hKLE9BQU8sQ0FBQ0csS0FBS08sRUFBRSxDQUFDLEdBQUdOO0lBQ3ZCO0lBQ0EsZ0NBQWdDO0lBRWhDLE1BQU1PLFNBQVMsTUFBTXhCLFVBQVU7SUFDL0IsTUFBTXlCLE9BQU8sRUFBRTtJQUNmLE1BQU1DLFNBQVMsQ0FBQztJQUNoQkYsT0FBT1YsT0FBTyxDQUFDQyxPQUFPLENBQUNDLENBQUFBO1FBQ25CLE1BQU1DLE9BQU9ELEtBQUtFLFVBQVUsQ0FBQyxLQUFLLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUNDLElBQUksQ0FBQ0MsT0FBTztRQUN4REksS0FBS0gsSUFBSSxDQUFDTDtRQUNWUyxNQUFNLENBQUNWLEtBQUtPLEVBQUUsQ0FBQyxHQUFHTjtJQUN0QjtJQUNBLDhCQUE4QjtJQUU5QixNQUFNVSxVQUFVLE1BQU0zQixVQUFVO0lBQ2hDLE1BQU00QixRQUFRLEVBQUU7SUFFaEJELFFBQVFiLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxDQUFBQTtRQUNwQixNQUFNQyxPQUFPRCxLQUFLRSxVQUFVLENBQUMsT0FBTyxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxJQUFJLENBQUNDLE9BQU87UUFDMUQsTUFBTVEsWUFBWWIsS0FBS0UsVUFBVSxDQUFDLE9BQU8sQ0FBQ1ksUUFBUSxDQUFDQyxHQUFHLENBQUNDLENBQUFBLElBQUtuQixPQUFPLENBQUNtQixFQUFFVCxFQUFFLENBQUM7UUFDekUsTUFBTVUsV0FBV2pCLEtBQUtFLFVBQVUsQ0FBQyxPQUFPLENBQUNZLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxJQUFLTixNQUFNLENBQUNNLEVBQUVULEVBQUUsQ0FBQztRQUN2RSxNQUFNVyxNQUFNbEIsS0FBS0UsVUFBVSxDQUFDLE1BQU0sQ0FBQ2dCLEdBQUc7UUFDdEMsTUFBTUMsUUFBUW5CLEtBQUtFLFVBQVUsQ0FBQyxRQUFRLENBQUNrQixLQUFLLENBQUMsRUFBRSxDQUFDQyxJQUFJLENBQUNILEdBQUc7UUFFeEROLE1BQU1OLElBQUksQ0FBQztZQUNQTCxNQUFNQTtZQUNOcUIsTUFBTVQsU0FBUyxDQUFDLEVBQUU7WUFDbEJKLE1BQU1RO1lBQ05DLEtBQUtBO1lBQ0xDLE9BQU9BO1FBQ1g7SUFDSjtJQUVBLGdDQUFnQztJQUNoQyxPQUFPSSxTQUFTL0IsSUFBSSxDQUFDO1FBQ2pCSSxPQUFPQTtRQUNQYSxNQUFNQTtRQUNORyxPQUFPQTtJQUNYO0FBQ0oiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZW93bHUvRG9jdW1lbnRzL2dpdGh1Yi9wcmFjdGljZS1uZXh0anMvYXBwL2FwaS9kYXRhL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRva2VuID0gXCJudG5fMjM2MDUxODUxNzkzV2xXaTFsd0JUbmQzY05icEp6Tzd4U0p1Unk4ZU0zNDFKMVwiO1xuY29uc3QgaGVhZGVycyA9IHtcbiAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgXCJOb3Rpb24tVmVyc2lvblwiOiBcIjIwMjEtMDUtMTNcIixcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxufTtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGRhdGFiYXNlSWQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5ub3Rpb24uY29tL3YxL2RhdGFiYXNlcy8ke2RhdGFiYXNlSWR9L3F1ZXJ5YCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7fSlcbiAgICB9KTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QpIHtcbiAgICBjb25zdCB0eXBlUmVzID0gYXdhaXQgZmV0Y2hEYXRhKFwiMWM2NTdlZmE4YTliODAzOGFjNzBmN2VhZWM4MjllZTNcIik7XG4gICAgY29uc3QgdHlwZXMgPSBbXCLlhajpg6hcIl07XG4gICAgY29uc3QgdHlwZUlkcyA9IHt9O1xuICAgIHR5cGVSZXMucmVzdWx0cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gaXRlbS5wcm9wZXJ0aWVzW1wi5ZCN56ixXCJdLnRpdGxlWzBdLnRleHQuY29udGVudDtcbiAgICAgICAgdHlwZXMucHVzaChuYW1lKTtcbiAgICAgICAgdHlwZUlkc1tpdGVtLmlkXSA9IG5hbWU7XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJUeXBlczpcIiwgdHlwZXMpO1xuXG4gICAgY29uc3QgdGFnUmVzID0gYXdhaXQgZmV0Y2hEYXRhKFwiMWM2NTdlZmE4YTliODA3YTg4ZGZjMjI2M2M3ZTNhZTZcIik7XG4gICAgY29uc3QgdGFncyA9IFtdO1xuICAgIGNvbnN0IHRhZ0lkcyA9IHt9O1xuICAgIHRhZ1Jlcy5yZXN1bHRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBpdGVtLnByb3BlcnRpZXNbXCLlkI3nqLFcIl0udGl0bGVbMF0udGV4dC5jb250ZW50O1xuICAgICAgICB0YWdzLnB1c2gobmFtZSk7XG4gICAgICAgIHRhZ0lkc1tpdGVtLmlkXSA9IG5hbWU7XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJUYWdzOlwiLCB0YWdzKTtcblxuICAgIGNvbnN0IGxpbmtSZXMgPSBhd2FpdCBmZXRjaERhdGEoXCIxYzY1N2VmYThhOWI4MDZmYWQ1NGZhMzJhNmEzMjEwMFwiKTtcbiAgICBjb25zdCBsaW5rcyA9IFtdO1xuXG4gICAgbGlua1Jlcy5yZXN1bHRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBpdGVtLnByb3BlcnRpZXNbXCJuYW1lXCJdLnRpdGxlWzBdLnRleHQuY29udGVudDtcbiAgICAgICAgY29uc3QgdHlwZXNMaXN0ID0gaXRlbS5wcm9wZXJ0aWVzW1widHlwZVwiXS5yZWxhdGlvbi5tYXAociA9PiB0eXBlSWRzW3IuaWRdKTtcbiAgICAgICAgY29uc3QgdGFnc0xpc3QgPSBpdGVtLnByb3BlcnRpZXNbXCJ0YWdzXCJdLnJlbGF0aW9uLm1hcChyID0+IHRhZ0lkc1tyLmlkXSk7XG4gICAgICAgIGNvbnN0IHVybCA9IGl0ZW0ucHJvcGVydGllc1tcInVybFwiXS51cmw7XG4gICAgICAgIGNvbnN0IGNvdmVyID0gaXRlbS5wcm9wZXJ0aWVzW1wiY292ZXJcIl0uZmlsZXNbMF0uZmlsZS51cmw7XG5cbiAgICAgICAgbGlua3MucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdHlwZTogdHlwZXNMaXN0WzBdLFxuICAgICAgICAgICAgdGFnczogdGFnc0xpc3QsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGNvdmVyOiBjb3ZlclxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiTGlua3M6XCIsIGxpbmtzKTtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IFxuICAgICAgICB0eXBlczogdHlwZXMsXG4gICAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICAgIGxpbmtzOiBsaW5rcyxcbiAgICB9KVxufSJdLCJuYW1lcyI6WyJ0b2tlbiIsImhlYWRlcnMiLCJmZXRjaERhdGEiLCJkYXRhYmFzZUlkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsIkdFVCIsInJlcXVlc3QiLCJ0eXBlUmVzIiwidHlwZXMiLCJ0eXBlSWRzIiwicmVzdWx0cyIsImZvckVhY2giLCJpdGVtIiwibmFtZSIsInByb3BlcnRpZXMiLCJ0aXRsZSIsInRleHQiLCJjb250ZW50IiwicHVzaCIsImlkIiwidGFnUmVzIiwidGFncyIsInRhZ0lkcyIsImxpbmtSZXMiLCJsaW5rcyIsInR5cGVzTGlzdCIsInJlbGF0aW9uIiwibWFwIiwiciIsInRhZ3NMaXN0IiwidXJsIiwiY292ZXIiLCJmaWxlcyIsImZpbGUiLCJ0eXBlIiwiUmVzcG9uc2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/data/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdata%2Froute&page=%2Fapi%2Fdata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdata%2Froute.js&appDir=%2FUsers%2Fmeowlu%2FDocuments%2Fgithub%2Fpractice-nextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmeowlu%2FDocuments%2Fgithub%2Fpractice-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdata%2Froute&page=%2Fapi%2Fdata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdata%2Froute.js&appDir=%2FUsers%2Fmeowlu%2FDocuments%2Fgithub%2Fpractice-nextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmeowlu%2FDocuments%2Fgithub%2Fpractice-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_meowlu_Documents_github_practice_nextjs_app_api_data_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/data/route.js */ \"(rsc)/./app/api/data/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/data/route\",\n        pathname: \"/api/data\",\n        filename: \"route\",\n        bundlePath: \"app/api/data/route\"\n    },\n    resolvedPagePath: \"/Users/meowlu/Documents/github/practice-nextjs/app/api/data/route.js\",\n    nextConfigOutput,\n    userland: _Users_meowlu_Documents_github_practice_nextjs_app_api_data_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkYXRhJTJGcm91dGUmcGFnZT0lMkZhcGklMkZkYXRhJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZGF0YSUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1lb3dsdSUyRkRvY3VtZW50cyUyRmdpdGh1YiUyRnByYWN0aWNlLW5leHRqcyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZtZW93bHUlMkZEb2N1bWVudHMlMkZnaXRodWIlMkZwcmFjdGljZS1uZXh0anMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ29CO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbWVvd2x1L0RvY3VtZW50cy9naXRodWIvcHJhY3RpY2UtbmV4dGpzL2FwcC9hcGkvZGF0YS9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZGF0YS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2RhdGFcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2RhdGEvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbWVvd2x1L0RvY3VtZW50cy9naXRodWIvcHJhY3RpY2UtbmV4dGpzL2FwcC9hcGkvZGF0YS9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdata%2Froute&page=%2Fapi%2Fdata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdata%2Froute.js&appDir=%2FUsers%2Fmeowlu%2FDocuments%2Fgithub%2Fpractice-nextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmeowlu%2FDocuments%2Fgithub%2Fpractice-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdata%2Froute&page=%2Fapi%2Fdata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdata%2Froute.js&appDir=%2FUsers%2Fmeowlu%2FDocuments%2Fgithub%2Fpractice-nextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmeowlu%2FDocuments%2Fgithub%2Fpractice-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();