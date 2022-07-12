var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var filterForm = document.getElementById('filter-form');
// Se creo evento de formulario 
var createFilter = function (e) { return __awaiter(_this, void 0, void 0, function () {
    var formF, filter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                formF = e.target;
                filter = {
                    location: formF.location.value,
                    seniority: formF.seniority.value,
                    category: formF.category.value
                };
                return [4 /*yield*/, addJob(filter)];
            case 1:
                _a.sent();
                loadJobs();
                return [2 /*return*/];
        }
    });
}); };
filterForm.addEventListener('submit', createFilter);
// Select de location
var locationsControl = document.getElementById('locations-control');
var loadLocations = function () { return __awaiter(_this, void 0, void 0, function () {
    var locations;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getLocations()];
            case 1:
                locations = _a.sent();
                locationsControl.innerHTML = '';
                locations.forEach(function (loc) {
                    var optionName = document.createElement('option');
                    var txtName = document.createTextNode(loc.name);
                    optionName.appendChild(txtName);
                    locationsControl.appendChild(optionName);
                });
                return [2 /*return*/];
        }
    });
}); };
loadLocations();
//Select seniority
var senioritiesControl = document.getElementById('seniorities-control');
var loadSeniorities = function () { return __awaiter(_this, void 0, void 0, function () {
    var seniorities;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getSeniorities()];
            case 1:
                seniorities = _a.sent();
                senioritiesControl.innerHTML = '';
                seniorities.forEach(function (sen) {
                    var optionName = document.createElement('option');
                    var txtName = document.createTextNode(sen.name);
                    optionName.appendChild(txtName);
                    senioritiesControl.appendChild(optionName);
                });
                return [2 /*return*/];
        }
    });
}); };
loadSeniorities();
//Select category
var categoriesControl = document.getElementById('categories-control');
var loadCategories = function () { return __awaiter(_this, void 0, void 0, function () {
    var categories;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getCategories()];
            case 1:
                categories = _a.sent();
                categoriesControl.innerHTML = '';
                categories.forEach(function (cat) {
                    var optionName = document.createElement('option');
                    var txtName = document.createTextNode(cat.name);
                    optionName.appendChild(txtName);
                    categoriesControl.appendChild(optionName);
                });
                return [2 /*return*/];
        }
    });
}); };
loadCategories();
//Cards de Jobs en home
var jobsContainer = document.getElementById('jobs-container');
var loadJobs = function () { return __awaiter(_this, void 0, void 0, function () {
    var jobs, cardJobs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getJobs()];
            case 1:
                jobs = _a.sent();
                cardJobs = jobsContainer.querySelector('section');
                section.innerHTML = '';
                jobs.forEach(function (job) {
                    var articleJob = document.createElement('article');
                    articleJob.classList.add('col');
                    var cardJob = document.createElement('div');
                    cardJob.classList.add('card-body');
                    var titleJob = document.createElement('h5');
                    titleJob.classList.add('card-title');
                    var txtTitle = document.createTextNode(job.name);
                    var description = document.createElement('p');
                    description.classList.add('card-text');
                    var txtDescription = document.createTextNode(job.description);
                    var filterLocation = document.createElement('span');
                    filterLocation.className = 'badge text-bg-info';
                    var txtLocation = document.createTextNode(job.location);
                    var filterSeniority = document.createElement('span');
                    filterSeniority.className = 'badge text-bg-info';
                    var txtSeniority = document.createTextNode(job.seniority);
                    var filterCategory = document.createElement('span');
                    filterCategory.className = 'badge text-bg-info';
                    var txtCategory = document.createTextNode(job.category);
                    var btnDetails = document.createElement('button');
                    var txtBtnDetails = document.createTextNode('See Details');
                    btnDetails.className = 'btn btn-primary mt-3';
                    var linkDetails = document.createElement('a');
                    linkDetails.setAttribute('href', '#');
                    linkDetails.classList.add('nav-link');
                    titleJob.appendChild(txtTitle);
                    description.appendChild(txtDescription);
                    filterLocation.appendChild(txtLocation);
                    filterSeniority.appendChild(txtSeniority);
                    filterCategory.appendChild(txtCategory);
                    btnDetails.appendChild(txtBtnDetails);
                    btnDetails.appendChild(linkDetails);
                    cardJob.appendChild(titleJob);
                    cardJob.appendChild(description);
                    cardJob.appendChild(filterLocation);
                    cardJob.appendChild(filterSeniority);
                    cardJob.appendChild(filterCategory);
                    cardJob.appendChild(btnDetails);
                    articleJob.appendChild(cardJob);
                    section.appendChild(articleJob);
                    btnDetails.addEventListener('click', getJob);
                });
                return [2 /*return*/];
        }
    });
}); };
loadJobs();
