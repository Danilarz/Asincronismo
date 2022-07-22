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
var params = new URLSearchParams(window.location.search);
var detailsContainer = document.getElementById('see-details');
var idParam = params.get('id');
var seeDetail = function () {
    var job = getJob('idParam');
    detailsContainer.innerHTML = '';
    var articleJob = document.createElement('article');
    articleJob.classList.add('col');
    var contCard = document.createElement('div');
    contCard.classList.add('card');
    var cardJob = document.createElement('div');
    cardJob.classList.add('card-body');
    var titleJob = document.createElement('h5');
    titleJob.classList.add('card-title');
    var txtTitle = document.createTextNode(job.name);
    var description = document.createElement('p');
    description.classList.add('card-text');
    var txtDescription = document.createTextNode(job.description);
    var filterLocation = document.createElement('span');
    filterLocation.className = 'badge text-bg-info m-1';
    var txtLocation = document.createTextNode(job.location);
    var filterSeniority = document.createElement('span');
    filterSeniority.className = 'badge text-bg-info m-1';
    var txtSeniority = document.createTextNode(job.seniority);
    var filterCategory = document.createElement('span');
    filterCategory.className = 'badge text-bg-info m-1';
    var txtCategory = document.createTextNode(job.category);
    var contBtn = document.createElement('div');
    contBtn.className = 'd-grid gap-2 d-md-flex justify-content-md-start';
    var btnEdit = document.createElement('a');
    var txtBtnEdit = document.createTextNode('Edit');
    btnEdit.setAttribute('href', "edit.html?job-id=".concat(job.id));
    btnEdit.className = 'nav-link btn btn-success mt-3 text-white p-2';
    var btnDelete = document.createElement('button');
    var txtBtnDelete = document.createTextNode('Delete');
    btnDelete.className = 'nav-link btn btn-danger mt-3 text-white p-2';
    btnDelete.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteJob(job.id)];
                case 1:
                    _a.sent();
                    getJobs();
                    return [2 /*return*/];
            }
        });
    }); });
    titleJob.appendChild(txtTitle);
    description.appendChild(txtDescription);
    filterLocation.appendChild(txtLocation);
    filterSeniority.appendChild(txtSeniority);
    filterCategory.appendChild(txtCategory);
    btnEdit.appendChild(txtBtnEdit);
    btnDelete.appendChild(txtBtnDelete);
    contBtn.appendChild(btnEdit);
    contBtn.appendChild(btnDelete);
    cardJob.appendChild(titleJob);
    cardJob.appendChild(description);
    cardJob.appendChild(filterLocation);
    cardJob.appendChild(filterSeniority);
    cardJob.appendChild(filterCategory);
    cardJob.appendChild(contBtn);
    contCard.appendChild(cardJob);
    articleJob.appendChild(contCard);
    detailsContainer.appendChild(articleJob);
    btnEdit.addEventListener('click', editJob);
};
seeDetail();
// const getJobInfo = async () => {
//     const job = await getJob(idParam);
//     name.value = job.name;
//     description.value = job.description;
//     location.value = job.location;
//     seniority.value = job.seniority;
//     category.value = job.category;
//     getjobInfo(); }
