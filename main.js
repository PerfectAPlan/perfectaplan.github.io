
function connectToFirebase() {
    function attempt(resolve) {
        try {
            firebase.initializeApp({
                apiKey: "AIzaSyBI7rTDC4LwArFfqebkWPHJ_Qk2rgx1ddQ",
                authDomain: "perfectaplan-1.firebaseapp.com",
                databaseURL: "https://perfectaplan-1-default-rtdb.firebaseio.com",
                projectId: "perfectaplan-1",
                storageBucket: "perfectaplan-1.appspot.com",
                messagingSenderId: "407406135664",
                appId: "1:407406135664:web:ef5de0ba1698a098d727b5"
            });
            resolve()
        } catch (error) {
            setTimeout(async function () {
                await attempt(resolve)
                resolve()
            }, 1000)
        }
    }

    return new Promise(attempt)
}


const CONST_DEFAULT_SETTINGS = {
    color: 2, zoom: 'n', timeFormat: 1, dateFormat: 1, preferences: {
        dark: true,
        iconPop: false,
        enableAnimation: true,
        dullColors: false,
        securityCheck: true,
    }
}

const CONST_THEME_CLASSES = [{
    Name: "Light Theme",
    Class: "light-theme",
    sMulti: 0.95,
    lMulti: 0.95,
}, {
    Name: "Dark Theme",
    Class: "dark-theme",
    sMulti: 1,
    lMulti: 1,
}]

const CONST_ZOOM_SETTINGS = [
    0.25, 0.30, 0.40, 0.50, 0.60, 0.67, 0.75, 0.80, 0.90,
    1,
    1.10, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00,
]

const CONST_NORMAL_BASE_ZOOM = 12.5;

const CONST_ACCENT_COLORS = [
    { h: 0, s: 90, l: 57, name: 'Red' },
    { h: 15, s: 90, l: 55, name: 'Orange' },
    { h: 30, s: 90, l: 57, name: 'Peach' },
    { h: 60, s: 70, l: 60, name: 'Yellow' },
    { h: 100, s: 50, l: 55, name: 'Lime' },
    { h: 120, s: 75, l: 35, name: 'Green' },
    { h: 150, s: 50, l: 55, name: 'Turquoise' },
    { h: 180, s: 50, l: 55, name: 'Cyan' },
    { h: 195, s: 85, l: 50, name: 'Teal' },
    { h: 210, s: 60, l: 55, name: 'Blue' },
    { h: 220, s: 75, l: 55, name: 'Dark Blue' },
    { h: 270, s: 75, l: 65, name: 'Purple' },
    { h: 300, s: 75, l: 65, name: 'Pink' },
]
const CONST_OTHER_COLORS = [
    { h: 0, s: 0, l: 90, name: 'White' },
    { h: 0, s: 0, l: 75, name: 'Light Grey' },
    { h: 0, s: 0, l: 35, name: 'Grey' },
    { h: 0, s: 0, l: 20, name: 'Dark Grey' },
    { h: 0, s: 0, l: 0, name: 'Black' },
]
let CONST_ALL_COLORS = []

for (const color of CONST_ACCENT_COLORS) {
    CONST_ALL_COLORS.push(color)
}
for (const color of CONST_OTHER_COLORS) {
    CONST_ALL_COLORS.push(color)
}

const CONST_DELETE_COLOR = [
    { h: 0, s: 100, l: 62 }, 
    { h: 0, s: 75, l: 65 }, 
]

const CONST_WORKSPACE_ANIMATION = {
    In: [
        { opacity: 0, transform: 'translateX(-10%)' },
        { opacity: 1, transform: 'translateX(0%)' },
    ],
    Out: [
        { opacity: 1, transform: 'translateX(0%)' },
        { opacity: 0, transform: 'translateX(10%)' }
    ],
    Options: { duration: 0, fill: 'forwards' }
}

const CONST_INSTANT_ANIMATION = {
    fill: 'forwards',
    duration: 0,
}

const CONST_SETTINGS_ANIMATION = {
    In: {
        transform: "scale(1)",
        opacity: 1,
    },
    Out: {
        transform: "scale(1.15)",
        opacity: 0,
    },
    Options: {
        fill: "forwards",
        duration: 150,
        easing: "ease",
    }
}

const CONST_PROMPT_ANIMATION = {
    In: {
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(1)',
    },
    Out: {
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(0.75)',
    },
    Background: {
        In: {
            opacity: 1,
        },
        Out: {
            opacity: 0,
        }
    },
    Options: { duration: 150, fill: 'forwards' },
}

const CONST_DROPDOWN_ANIMATION = {
    In: {
        opacity: 1,
        transform: 'scale(1)',
    },
    Out: {
        opacity: 0,
        transform: 'scale(0.75)',
    },
    Background: {
        In: {
            opacity: 1,
        },
        Out: {
            opacity: 0,
        }
    },
    Options: {
        duration: 150,
        fill: 'forwards',
    }
}

const CONST_VIEW_SETTINGS_ANIMATION = {
    In: {
        opacity: 1,
        transform: 'scale(1)',
    },
    Out: {
        opacity: 0,
        transform: 'scale(0.75)',
    },
    Base: {
        In: {
            opacity: 1,
        },
        Out: {
            opacity: 0,
        }
    },
    Options: {
        duration: 150,
        fill: 'forwards',
    }
}

const CONST_STATUS_SETTINGS_ANIMATION = {
    In: {
        opacity: 1,
        transform: 'scale(1)',
    },
    Out: {
        opacity: 0,
        transform: 'scale(0.75)',
    },
    Base: {
        In: {
            opacity: 1,
        },
        Out: {
            opacity: 0,
        }
    },
    Options: {
        duration: 150,
        fill: 'forwards',
    }
}

const CONST_SHARE_ANIMATION = {
    In: {
        opacity: 1,
        transform: 'scale(1)',
    },
    Out: {
        opacity: 0,
        transform: 'scale(0.75)',
    },
    Base: {
        In: {
            opacity: 1,
        },
        Out: {
            opacity: 0,
        }
    },
    Options: {
        duration: 150,
        fill: 'forwards',
    }
}

const CONST_HOST_NAME = "perfectaplan.com"
const CONST_URL = `https://${CONST_HOST_NAME}`

function res(name) {
    if (window.location.hostname !== CONST_HOST_NAME) {
        return "res/" + name;
    } else {
        return CONST_URL + '/res/' + name;
    }
}

function svg(name) {
    return res("map.svg#" + name)
}

const CONST_PAGES_DATA = {
    home: {
        Header: "Home",
        Text: "Home",
        Icon: svg("home"),
        Initializer: function () {
            document.getElementById('home').style.display = ''

            const homeRecentSpaces = document.getElementById('homeRecentSpaces')
            homeRecentSpaces.innerHTML = ''

            const homeSharedWithYou = document.getElementById('homeSharedWithYou')
            homeSharedWithYou.innerHTML = ''

            let alreadyAdded = []
            function makeSpaceCopy(projectId, spaceId, newParent) {
                if (newParent === homeSharedWithYou) {
                    for (const item of alreadyAdded) {
                        if (item.projectId === projectId && item.spaceId === spaceId) {
                            return
                        }
                    }

                    alreadyAdded.push({
                        projectId: projectId,
                        spaceId: spaceId
                    })
                }

                const space = loadedProjectsDiv.querySelector(`#projectDropdown_${projectId} #projectDropdownSpace_${spaceId}`)
                const clone = space.cloneNode(true)
                clone.removeAttribute('id')
                clone.removeAttribute('selected')

                bindClick(clone, function () {
                    space.click()
                })

                newParent.append(clone)
            }

            const recent = getLocalData('recentSpaces') || []
            for (const item of recent) {
                const projectId = item.projectId
                const spaceId = item.spaceId

                const data = getProjectData(projectId)
                if (data) {
                    makeSpaceCopy(projectId, spaceId, homeRecentSpaces)

                    if (data.creator !== uId) {
                        makeSpaceCopy(projectId, spaceId, homeSharedWithYou)
                    }
                }
            }

            for (const projectId in loadedProjects) {
                const project = loadedProjects[projectId]
                for (const spaceId in project.spaces) {
                    const space = project.spaces[spaceId]

                    const data = getProjectData(projectId)
                    if (data && data.creator !== uId) {
                        makeSpaceCopy(projectId, spaceId, homeSharedWithYou)
                    }
                }
            }

            if (homeRecentSpaces.children.length === 0) {
                homeRecentSpaces.innerText = 'Your recently visited spaces will show up here!'
            }

            if (homeSharedWithYou.children.length === 0) {
                homeSharedWithYou.innerText = 'Any projects shared with you will show up here!'
            }
        },
        Deinitializer: function () {
            document.getElementById('home').style.display = 'none'
        }
    },
    
    
    
    
    
    settings: {
        Header: false,
        Text: "Settings",
        Icon: svg("settings"),
        Initializer: function () {
            let container = document.getElementById('yourSettingsContainer')
            if (container.style.display === 'grid') { return }

            container.setAttribute('lastPath', requestedPath)
            handleNewUserSettings()

            container.style.display = 'grid'
            container.animate([CONST_SETTINGS_ANIMATION.Out, CONST_SETTINGS_ANIMATION.In], processAnimationOptions(CONST_SETTINGS_ANIMATION.Options))

            openSettingsPage(container.querySelector(".settingsSelectable"), false, true)
        },
        Deinitializer: function () {
            let container = document.getElementById('yourSettingsContainer')
            if (container.style.display === '' || container.style.display === 'none') { return }

            container.animate([CONST_SETTINGS_ANIMATION.In, CONST_SETTINGS_ANIMATION.Out], processAnimationOptions(CONST_SETTINGS_ANIMATION.Options)).onfinish = function () {
                container.style.display = 'none'
            }
        }
    },
}

const CONST_LOADED_PROJECT_DROPDOWNS = ["Your Projects", "Other Projects"]

const CONST_STATUS_DEFAULT_COLOR = 14;
const CONST_DEFAULT_STATUSES = {
    'start': {
        id: 0,
        name: 'To-Do',
        color: CONST_STATUS_DEFAULT_COLOR,
    },
    '0': {
        id: 2,
        name: 'In Progress',
        color: 3,
    },
    'finish': {
        id: 1,
        name: 'Done',
        color: 4,
    },
}

const CONST_AUDIT_DATA = {
    task: {
        create: {
            name: "Create Task",
            makeSentence: function (username, times) {
                return `${username} ${times === 1 ? `created a task` : `created ${times} tasks`}`
            },
            getLocation: function (data) {
                const base = `auditData/${data.projectId}/spaces/${data.spaceId}/task/create`
                if (data.taskId) {
                    return base + `/${data.taskId}`
                }
                return base
            },
        },
        edit: {
            name: "Edit Task",
            makeSentence: function (username, times) {
                return `${username} ${times === 1 ? `edited a task` : `edited ${times} tasks`}`
            },
            getLocation: function (data) {
                const base = `auditData/${data.projectId}/spaces/${data.spaceId}/task/edit`
                if (data.taskId) {
                    return base + `/${data.taskId}`
                }
                return base
            },
            addExtraLocation: function (items, data) {
                let auditId = generatePushID()

                let secondValue = deepCopy(items[0].Value)
                secondValue.id = data.taskId

                items[0].Value.auditId = auditId

                items.push({
                    Location: `auditData/${data.projectId}/spaces/${data.spaceId}/task/editHistory/${auditId}`,
                    Value: secondValue
                })
            }
        },
        delete: {
            name: "Delete Task",
            makeSentence: function (username, times) {
                return `${username} ${times === 1 ? `deleted a task` : `deleted ${times} tasks`}`
            },
            getLocation: function (data) {
                const base = `auditData/${data.projectId}/spaces/${data.spaceId}/task/delete`
                if (data.taskId) {
                    return base + `/${data.taskId}`
                }
                return base
            },
        }
    }
}

const CONST_MAKE_VIEW_DATA = [
    {
        Icon: svg("listView"),
        Name: "List",
        Description: "Organize your tasks in a list, with the ability to customize columns to your desires.",
        Class: "listView",
        PremiumOnly: true,
    },
    {
        Icon: svg("boardView"),
        Name: "Board",
        Description: "Make your perfect board to easily drag-and-drop tasks between columns.",
        Class: "",
    },
]

const CONST_SHARE_PROJECT_DATA = {
    [1]: {
        name: "View",
        description: "Read-only. Can't edit or comment."
    },
    [2]: {
        name: "Comment",
        description: "Can comment, but can't edit."
    },
    [3]: {
        name: "Edit",
        fullName: "Edit Tasks",
        description: "Can create & modify tasks. Can't configure project or spaces."
    },
    [4]: {
        name: "Manage",
        fullName: "Manage Project",
        description: "Can configure project and spaces, create, & modify tasks. Can't change access."
    },
    [5]: {
        name: "Owner",
        description: "Full access. Can change access, configure project and spaces, create, & modify tasks."
    },
}

const CONST_SORT_METHODS = [
    {
        Name: "Custom",
        Method: function (taskAId, taskA, taskBId, taskB) {
            const taskAOrder = getTaskOrder(taskAId)
            const taskBOrder = getTaskOrder(taskBId)

            if (taskAOrder !== null && taskBOrder !== null) {
                return taskAOrder < taskBOrder
            } else if (taskAOrder !== null && taskBOrder === null) {
                return true
            } else if (taskAOrder === null && taskBOrder !== null) {
                return false
            }
        }
    },
    {
        Name: "Date created",
        Method: function (taskAId, taskA, taskBId, taskB) {
            return taskAId > taskBId
        }
    },
    {
        Name: "Date updated",
        Method: function (taskAId, taskA, taskBId, taskB) {
            return taskA.lastUpdatedAt > taskB.lastUpdatedAt
        }
    },
    {
        Name: "Name",
        Method: function (taskAId, taskA, taskBId, taskB) {
            return taskA.name < taskB.name
        }
    },
]
const CONST_GROUP_METHODS = [
    {
        Name: "Status",
        ShowStatusBar: false,
        GetGroups: function (projectId, projectData, spaceId, spaceData) {
            const orderedStatuses = getOrderedStatuses(projectId, spaceId)
            let groups = []

            for (const status of orderedStatuses) {
                groups.push({
                    GroupId: status.id,
                    Text: status.name,
                    GetColor: function () {
                        return getStatusColor(status.id)
                    }
                })
            }

            groups[groups.length - 1].HideClose = true

            return groups
        },
        GetGroupIdFromTaskData: function (taskData) {
            return taskData.status || 0
        },
        SetTaskDataGroupId: function (taskData, groupId) {
            taskData.status = groupId || 0
        }
    },
]

const CONST_MAX_STRING_LENGTHS_FOR_NAMESPACES = {
    user: 20,

    project: 30,
    space: 30,
    view: 30,

    status: 30,

    task: 300,
    subtask: 300,
}

let cachedUsernames = {}
let cachedAvatars = {}
let cachedTakenUsernames = {}

const FAKE_NEW_ITEM_ID = 'new_item'

const CONST_UPDATE_LAST_ONLINE_EVERY = 30 * 1000;
const CONST_LAST_ONLINE_FLUX_FACTOR = 1.5; 
const CONST_USERNAME_CACHE_TIME = 60 * 5 * 1000; 
const CONST_AVATAR_CACHE_TIME = 60 * 5 * 1000; 
const CONST_TAKEN_USERNAME_CACHE_TIME = 60 * 5 * 1000; 

const CONST_LOAD_OLD_DATA_FLUX = 60 * 1000; 

const CONST_DOUBLE_CLICK_INTERVAL = 350;

let maid = [] 

let root, welcomePage, contentPage, workspacePage, tasksContainer, loadedProjectsDiv


let db
let aUser
let uId

let userData
let userSettings
let lastUserSettings
let currentSelectedProject
let currentSelectedSpace
let currentSelectedView
let loadedProjects = {}
let loadedSpacesForProjects = {}
let loadedTasks = {}
const taskOrderNative = {}
const taskOrder = {}

let requestedPath

let existingLocalData = false
let limitSizeFor = {}

let userLoadedResolve
let userLoaded = new Promise(resolve => {
    userLoadedResolve = resolve
})

const CONST_LOCAL_STORAGE_KEY_NAME = "PerfectAPlan"
const CONST_LOCAL_STORAGE_MAIN_NAME = "MAIN"
function checkLocalDataReady(doNotUseCached) {
    if (!existingLocalData || doNotUseCached) {
        const got = localStorage.getItem(CONST_LOCAL_STORAGE_KEY_NAME)
        existingLocalData = (got && JSON.parse(got)) || {}

        
        if (!localStorage.getItem('size') && !localStorage.getItem('testSize')) {
            localStorage.removeItem(CONST_LOCAL_STORAGE_KEY_NAME)

            let i = 0;
            let s = ""
            try {
                
                for (i = 250; i <= 10000; i += 250) {
                    s += "a".repeat(250 * 1024)
                    localStorage.setItem('testSize', s);
                }
            } catch (e) {
                localStorage.removeItem('testSize');
                localStorage.setItem('size', (i - 250).toString());
            }

            localStorage.setItem(CONST_LOCAL_STORAGE_KEY_NAME, got)
        }
    }
    if (uId) {
        if (!existingLocalData[uId]) {
            existingLocalData[uId] = {}
        }
    }

    if (!existingLocalData[CONST_LOCAL_STORAGE_MAIN_NAME]) {
        existingLocalData[CONST_LOCAL_STORAGE_MAIN_NAME] = {}
    }
}

function updateLocalDataStored() {
    checkLocalDataReady()

    localStorage.setItem(CONST_LOCAL_STORAGE_KEY_NAME, JSON.stringify(existingLocalData))
}

function getLocalData(name, doNotUseCached, doNotDependOnUser) {
    checkLocalDataReady(doNotUseCached)
    if (doNotDependOnUser) {
        return existingLocalData[CONST_LOCAL_STORAGE_MAIN_NAME][name]
    } else {
        return existingLocalData[uId][name]
    }
}

function setLocalData(name, value, doNotDependOnUser) {
    checkLocalDataReady()
    if (!doNotDependOnUser) {
        existingLocalData[uId][name] = value
    } else {
        existingLocalData[CONST_LOCAL_STORAGE_MAIN_NAME][name] = value
    }

    if (limitSizeFor) {
        limitSizeFor[name] = true
    }

    updateLocalDataStored()
}

function getLocalDataSize() {
    return parseInt(localStorage.getItem('size')) || 0
}

function clearLocalData() {
    for (const key in localStorage) {
        localStorage.removeItem(key)
    }
}


let cachedScrollbarWidthData
function getScrollbarWidth() {
    if (cachedScrollbarWidthData) {
        if (cachedScrollbarWidthData.expiresAt > Date.now()) {
            return cachedScrollbarWidthData.data;
        }
    }
    
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; 
    outer.style.msOverflowStyle = 'scrollbar'; 
    document.body.appendChild(outer);

    
    const inner = document.createElement('div');
    outer.appendChild(inner);

    
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    
    outer.parentNode.removeChild(outer);

    cachedScrollbarWidthData = {
        expiresAt: Date.now() + 2 * 1000,
        data: scrollbarWidth,
    }

    return scrollbarWidth;
}

function convertColor(realColor) {
    let theme = CONST_THEME_CLASSES[getCurrentTheme()]
    let sMulti = theme.sMulti
    let lMulti = theme.lMulti
    if (realColor[0]) {
        realColor = realColor[getCurrentTheme()]
        sMulti = lMulti = 1
    }
    return {
        h: realColor.h,
        s: realColor.s * sMulti,
        l: realColor.l * lMulti,
    }
}

function getAccentColor(index) {
    return convertColor(CONST_ACCENT_COLORS[index])
}

function getColor(index, fallbackIndex) {
    return CONST_ALL_COLORS[index] || (fallbackIndex && CONST_ALL_COLORS[fallbackIndex])
}

function getColorString(realColor, convertFirst, alpha) {
    let color = realColor
    if (convertFirst) {
        color = convertColor(realColor)
    }

    return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${alpha || 1})`
}

function getDefaultStatus() {
    return getOrderedStatuses(currentSelectedProject, currentSelectedSpace)[0]
}

function getClosedStatus() {
    const ordered = getOrderedStatuses(currentSelectedProject, currentSelectedSpace)
    return ordered[ordered.length - 1]
}

function getStatusColor(statusId) {
    const projectData = getSelectedProjectData()
    const statuses = projectData.statuses

    if (statuses) {
        let color = false
        for (const id in statuses) {
            const thisStatus = statuses[id]
            if (thisStatus.id === statusId) {
                color = thisStatus.color
            }
        }

        if (color === false) {
            color = statuses.start.color
        }

        return getColorString(getColor(color), true)
    }
}

function swapToggle(toggle, setParent) {
    if (toggle.getAttribute('selected')) {
        toggle.removeAttribute('selected')
        if (setParent) {
            toggle.parentElement.removeAttribute('selected')
        }
    } else {
        toggle.setAttribute('selected', true)
        if (setParent) {
            toggle.parentElement.setAttribute('selected', true)
        }
    }
}

let forceReplacePath = false;
function updatePath(newPath, title) {
    if (requestedPath === newPath) { return }

    requestedPath = newPath
    if (window.location.origin.includes("localhost")) {
        console.log("Would change to: '" + newPath + "'")
        return 
    }

    if (window.location.href.includes("?") || forceReplacePath) {
        forceReplacePath = true;
        window.history.replaceState(newPath, title || '', newPath)
    } else {
        window.history.pushState(newPath, title || '', newPath)
    }
}

async function onPageLoad() {
    
    root = document.body.parentElement
    welcomePage = document.getElementById('welcome')
    contentPage = document.getElementById('content')
    workspacePage = document.getElementById('workspace')
    tasksContainer = document.getElementById('tasksContainer')
    loadedProjectsDiv = document.getElementById('loadedProjects')

    
    document.getElementById("versionText").innerHTML = `${document.body.getAttribute("perfectAPlanVersion")}<br>Copyright © ${new Date().getFullYear()} - All Rights Reserved`

    
    updateUUnits(16)

    
    await connectToFirebase()
    db = firebase.database()

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            loadAuthUser(user)
        } else {
            handleNewUser()
        }
    })

    
    welcomePage.setAttribute('notFinished', 'true')

    
    function waitForFinish() {
        if (parseFloat(window.getComputedStyle(welcomePage).opacity) >= 1) {
            welcomePage.removeAttribute('notFinished')
            return
        }
        requestAnimationFrame(waitForFinish)
    }
    waitForFinish()

    
    document.body.parentElement.classList.add("menuNotOpen")

    
    document.body.parentElement.classList.add("notDraggingTask")

    
    initDropdownComputeLoop()

    
    initTaskContainer()

    
    let loc = window.location.href
    let queryIndex = loc.indexOf("?")
    if (queryIndex !== -1) {
        let queries = loc.substring(queryIndex + 1)
        let fullPath = queries.substring(queries.indexOf("p=") + 2)
        if (fullPath.includes('&')) {
            fullPath = fullPath.substring(0, fullPath.indexOf('&'))
        }

        updatePath(fullPath)
    }

    
    const sidebarButtons = document.getElementById('sidebarButtons')
    for (const id in CONST_PAGES_DATA) {
        const data = CONST_PAGES_DATA[id]

        let div = document.createElement('div')
        div.className = "sidebarSelectable"
        div.setAttribute('openPage', id)

        let back = document.createElement('div')

        let icon = createSvg(data.Icon)

        let text = document.createElement('p')
        text.innerText = data.Text

        bindClick(div, function (event) {
            makeRipple(div, event)
            showPage(id)
        })

        div.append(back, icon, text)
        sidebarButtons.append(div)
    }

    
    for (const name of CONST_LOADED_PROJECT_DROPDOWNS) {
        let newDropdown = createDropdown(name, true)
        loadedProjectsDiv.appendChild(newDropdown)
    }

    
    const createProjectHome = document.getElementById('createProjectHome')
    bindClick(createProjectHome, function () {
        const button = loadedProjectsDiv.querySelector('.projectDropdown[dropdownid="Your Projects"] .projectDropdownAdd')
        handleCreateProjectButton(button)
    })

    
    const headerProjectViewsContainer = document.getElementById('headerProjectViewsContainer')
    headerProjectViewsContainer.onwheel = function (event) {
        const scroll = event.deltaX + event.deltaY
        updateHeaderViewScroll(scroll)
    }

    
    function onKeyPress(key) {
        if (lastPromptOptions.Closed === false) {
            if (key === "Escape") {
                resolveLastPrompt(false)
            } else if (key === "Enter") {
                if (!lastPromptOptions.ShowInput) {
                    resolveLastPrompt(true)
                }
            }
        }
    }

    let allDown = {}
    let isDown = {}
    document.onkeydown = function (event) {
        if (allDown[event.key]) { return }

        allDown[event.key] = true
        if (!document.activeElement ||
            document.activeElement.tagName !== "INPUT") {
            if (Date.now() - lastPromptOptions.LastOpenTime >= 50) {
                isDown[event.key] = true
            }
        }
    }
    document.onkeyup = function (event) {
        if (allDown[event.key]) {
            delete allDown[event.key]
        }
        if (!document.activeElement ||
            document.activeElement.tagName !== "INPUT") {
            if (isDown[event.key]) {
                onKeyPress(event.key)
                delete isDown[event.key];
            }
        }
    }

    
    setTimeout(() => {
        window.onpopstate = function (event) {
            const rawPath = window.location.href.substring(window.location.origin.length);
            if (!event.state) {
                if (rawPath.length > 1) {
                    window.history.back()
                    window.location.reload()
                }
            } else {
                requestedPath = rawPath
                forceReplacePath = true
                handleRequestedPath()
            }
        }
    }, 200)

    
    fixCss()

    
    let intervalId
    let id = Date.now() + "|" + Math.random()
    setLocalData('page-loaded', id, true)

    async function checkOtherPageOpen() {
        let currentVal = getLocalData('page-loaded', true, true)
        if (currentVal !== id) {
            clearInterval(intervalId)

            for (const f of maid) {
                f()
            }

            await showPrompt({
                Header: "Session Expired",
                Content: "Another window was opened, so this session expired. To use this window, press the button below.",
                ConfirmText: "Use This Window",
                FillBackground: true,
            })

            window.location.reload()
        }
    }

    intervalId = setInterval(checkOtherPageOpen, 500)

    
    if (window.location.hostname !== CONST_HOST_NAME) {
        let svgs = document.querySelectorAll('svg')
        for (const svg of svgs) {
            let use = svg.querySelector('use')
            if (use) {
                console.log("replacing")
                if (use.getAttribute('href').startsWith(CONST_URL)) {
                    use.setAttribute('href', use.getAttribute('href').substring(CONST_URL.length))
                }
            }
        }
        console.log("Ignore any above warnings related to unsafe attempts - localhost issue only")
    }
}

function fixCss() {
    let sidebar = document.getElementById('sidebar')
    let main = document.getElementById('main')

    
    main.style.marginLeft = sidebar.getBoundingClientRect().x + sidebar.clientWidth + "px"

    
    let fancyInputFields = document.querySelectorAll(".fancyInputField")
    for (const item of fancyInputFields) {
        let input = item.querySelector("input")
        let div = item.querySelector("div")
        if (input === document.activeElement) {
            div.style.backgroundColor = "var(--accent)"
        } else {
            div.style.backgroundColor = "var(--input-line)"
        }
    }

    
    const toggles = document.querySelectorAll(".fancyToggle")
    for (const toggle of toggles) {
        if (!toggle.setupT) {
            toggle.setupT = true

            if (!toggle.getAttribute('disabledefaulttoggle')) {
                async function additionalHandle() {
                    let refName = toggle.parentElement.getAttribute('refname')
                    if (refName) {
                        if (userSettings) {
                            const currentValue = userSettings.preferences[refName]
                            userSettings.preferences[refName] = !currentValue
                            handleNewUserSettings()
                        }
                    }
                }

                let setParent = false
                function swap() {
                    swapToggle(toggle, setParent)
                    additionalHandle()
                }

                if (toggle.parentElement.classList.contains("fancyToggleDescription")) {
                    bindClick(toggle.parentElement, swap)
                    setParent = true
                } else {
                    bindClick(toggle, swap)
                }
            }
        }
    }

    
    const multiChoices = document.querySelectorAll(".fancyMultiChoice")
    for (const multiChoice of multiChoices) {
        if (!multiChoice.setupT) {
            function click(element) {
                for (const choice of multiChoice.children) {
                    if (choice === element) {
                        choice.setAttribute('selected', 'true')
                    } else {
                        choice.removeAttribute('selected')
                    }
                }
            }
            for (const choice of multiChoice.children) {
                if (multiChoice.parentElement.id === "settingsZoomDiv") {
                    bindClick(choice, function () {
                        changeZoomSettingsButtonHandler(true, choice.getAttribute("refname"))
                        click(choice)
                    })
                } else if (multiChoice.id === "settingsTimeFormat") {
                    bindClick(choice, function () {
                        updateTimeFormatSetting(true, choice.getAttribute('refname'))
                        click(choice)
                    })
                } else if (multiChoice.id === "settingsDateFormat") {
                    bindClick(choice, function () {
                        updateTimeFormatSetting(false, choice.getAttribute('refname'))
                        click(choice)
                    })
                } else {
                    bindClick(choice, function () {
                        click(choice)
                    })
                }
            }
            multiChoice.setupT = true
        }
    }

    
    let taskGroupContainers = tasksContainer.querySelectorAll(".taskGroupContainer");
    const scrollbarWidth = getScrollbarWidth()
    for (const child of taskGroupContainers) {
        const header = child.querySelector('.taskGroupContainerHeader')
        const content = child.querySelector('.taskGroupContainerContent')
        if (content.children.length > 0) {
            content.children[0].style.marginTop = "0"
        }

        if (content.scrollHeight > content.clientHeight) {
            child.style.setProperty('--scrollbar-add', `${scrollbarWidth}px`)
            child.classList.add('hasScrollbar')
        } else {
            child.style.removeProperty('--scrollbar-add')
            child.classList.remove('hasScrollbar')
        }

        content.style.height = (child.clientHeight - header.clientHeight) + 'px'
    }

    const newTotal = document.body.clientWidth + 'px';
    if (tasksContainer.style.getPropertyValue("--total-width") !== newTotal) {
        tasksContainer.style.setProperty("--total-width", newTotal)
    }

    
    const yourSettingsSidebar = document.getElementById('yourSettingsSidebar')
    const yourSettingsContent = document.getElementById('yourSettingsContent')

    for (const child of yourSettingsContent.children) {
        if (child.style.display !== 'none') {
            let scrolled = yourSettingsContent.scrollTop
            let buttonData = []
            for (const item of yourSettingsSidebar.children) {
                if (item.getAttribute('pagename') === child.getAttribute('pagename')) {
                    let scrollTo = item.getAttribute('scrollto')
                    const element = scrollTo && yourSettingsContent.querySelector("#" + scrollTo)
                    buttonData.push([item, (element && element.getBoundingClientRect().top + scrolled) || 0])
                }
            }

            let toClick
            let soFar = 0;
            for (const data of buttonData) {
                soFar += data[1]
                if (scrolled >= soFar / 2) {
                    toClick = data[0]
                }
            }

            if (toClick) {
                openSettingsPage(toClick, true)
            }
        }
    }

    
    updateHeaderViewScroll(0)

    window.requestAnimationFrame(fixCss)
}

function getElementHeight(element) {
    return element.getBoundingClientRect().height
}

function computeForDropdown(dropdown) {
    const content = dropdown.querySelector("div")

    const contentHeight = getElementHeight(content)

    if (contentHeight === 0) {
        requestAnimationFrame(function () {
            computeForDropdown(dropdown)
        })
        return
    }

    const contentPx = contentHeight + 'px'
    if (dropdown.style.getPropertyValue('--real-content-height') !== contentPx) {
        dropdown.style.setProperty('--real-content-height', contentPx, "important")
    }

    let fullHeight = 0;
    for (const item of dropdown.children) {
        if (dropdown.getAttribute("isMain")) {
            if (item.classList.contains("projectDropdown")) {
                let children = item.children
                let isClosed = item.getAttribute("closed") === "true"
                if (!isClosed) {
                    for (const child of children) {
                        fullHeight += getElementHeight(child);
                    }
                } else {
                    fullHeight += getElementHeight(children[0]);
                }
            } else {
                fullHeight += getElementHeight(item);
            }
        } else {
            fullHeight += getElementHeight(item);
        }
    }

    const toSet = fullHeight + 'px'
    if (dropdown.style.getPropertyValue('--real-full-height') !== toSet) {
        dropdown.style.setProperty('--real-full-height', toSet, "important")
    }
}

function computeAllDropdowns() {
    let dropdowns = loadedProjectsDiv.querySelectorAll(".projectDropdown")
    for (const dropdown of dropdowns) {
        computeForDropdown(dropdown)
    }
}

function initDropdownComputeLoop() {
    computeAllDropdowns()

    window.addEventListener('resize', function () {
        computeAllDropdowns()
    })

    const mutationObserver = new MutationObserver(function () {
        computeAllDropdowns()
    })

    mutationObserver.observe(loadedProjectsDiv, {
        childList: true,
        subtree: true,
    })
}

async function handleUsernameForUser(id, handler) {
    if (cachedUsernames[id] && cachedUsernames[id].expiresAt > Date.now()) {
        handler(cachedUsernames[id].data)
    } else {
        db.ref('users/' + id + '/username').get(id).then((snapshot) => {
            cachedUsernames[id] = {
                expiresAt: Date.now() + (CONST_USERNAME_CACHE_TIME),
                data: snapshot.val() || 'this should never appear',
            }

            handler(cachedUsernames[id].data)
        }).catch(handleError)
    }
}

async function handleAvatarForUser(id, handler) {
    if (cachedAvatars[id] && cachedAvatars[id].expiresAt > Date.now()) {
        handler(cachedAvatars[id].data)
    } else {
        db.ref('users/' + id + '/avatar').get(id).then((snapshot) => {
            cachedAvatars[id] = {
                expiresAt: Date.now() + (CONST_AVATAR_CACHE_TIME),
                data: snapshot.val() || res('unknownUser.png'),
            }

            handler(cachedAvatars[id].data)
        }).catch(handleError)
    }
}

async function awaitUsernameTaken(name) {
    name = name.toLowerCase()
    return new Promise((resolve => {
        if (cachedTakenUsernames[name] && cachedTakenUsernames[name].expiresAt > Date.now()) {
            resolve(cachedTakenUsernames[name].data)
        } else {
            db.ref('usernames/' + name).get().then((snapshot) => {
                cachedTakenUsernames[name] = {
                    expiresAt: Date.now() + (CONST_TAKEN_USERNAME_CACHE_TIME),
                    data: snapshot.val() || false,
                }

                resolve(cachedTakenUsernames[name].data)
            }).catch(handleError)
        }
    }))
}

function makeRipple(element, event, override) {
    const container = element.querySelector(".makeRippleContainer") || document.createElement('div')
    container.setAttribute('class', 'blocker')
    let current = parseInt(container.getAttribute('count')) || 0
    current++
    container.setAttribute('count', current.toString())

    let circle = document.createElement('div')
    circle.className = 'makeRipple'
    circle.style.position = "absolute";

    let bounds = element.getBoundingClientRect()
    let theX = bounds.left;
    let theY = bounds.top;

    const xCenterDistanceFactor = Math.abs((event.clientX) - (bounds.left + (bounds.width * 0.5))) / bounds.width * 2

    const diameter = Math.max(element.clientWidth * (1 + xCenterDistanceFactor), element.clientHeight);
    circle.style.width = diameter + 'px';
    circle.style.height = diameter + 'px';
    circle.style.left = (event ? (event.clientX - theX) : (override && override.x || 0)) - (diameter / 2) + 'px';
    circle.style.top = (event ? (event.clientY - theY) : (override && override.y || 0)) - (diameter / 2) + 'px';
    circle.style.backgroundColor = "white";
    circle.style.borderRadius = "50%"
    circle.style.pointerEvents = "none"

    const options = processAnimationOptions({
        duration: 250,
    })

    container.appendChild(circle)
    if (container.parentElement !== element) {
        element.appendChild(container)
    }
    circle.animate([
        {
            transform: "scale(0)",
            opacity: 0.5,
        },
        {
            transform: "scale(1)",
            opacity: 0,
        },
    ], options).onfinish = function () {
        if (element && circle.parentElement === container) {
            container.removeChild(circle)
        }
        if (current === parseInt(container.getAttribute('count'))) {
            element.removeChild(container)
        }
    }
}

function bindClick(element, handler, doNotOverride) {
    if (doNotOverride) {
        return element.addEventListener('click', handler)
    } else {
        element.onclick = handler
    }
}

function bindRightClick(element, handler, doNotOverride) {
    if (doNotOverride) {
        return element.addEventListener('contextmenu', function (event) {
            event.preventDefault()
            handler(event)
        })
    } else {
        element.oncontextmenu = function (event) {
            event.preventDefault()
            handler(event)
        }
    }
}

function bindDoubleClick(element, handler, doNotOverride) {
    let last = 0;
    if (doNotOverride) {
        return bindClick(element, function (event) {
            let diff = Date.now() - last;
            if (diff <= CONST_DOUBLE_CLICK_INTERVAL) {
                handler(event)
            }
            last = Date.now()
        }, true)
    } else {
        bindClick(element, function (event) {
            let diff = Date.now() - last;
            if (diff <= CONST_DOUBLE_CLICK_INTERVAL) {
                handler(event)
            }
            last = Date.now()
        })
    }
}


function deepCopy(object) {
    if (typeof object === 'object') {
        let newObject = {}

        for (const key in object) {
            newObject[key] = deepCopy(object[key])
        }

        return newObject
    } else {
        return object
    }
}

const nonObjectAllowList = [firebase.database.ServerValue.TIMESTAMP, null]
function deepUpdate(original, object2, isNotFirst) {
    const object1 = isNotFirst ? original : deepCopy(original)

    for (const key in object2) {
        const item = object2[key]
        if (typeof item === 'object' && !nonObjectAllowList.includes(item)) {
            if (!object1[key]) {
                object1[key] = {}
            }
            deepUpdate(object1[key], item)
        } else {
            object1[key] = object2[key]
        }
    }

    return object1
}

function oneWayDeepCompareObject(objectA, objectB, ignoreFields) {
    for (const key in objectA) {
        if (!ignoreFields || !ignoreFields.includes(key)) {
            if (!deepCompare(objectA[key], objectB[key], ignoreFields)) {
                return false
            }
        }
    }
    return true
}

function deepCompare(objectA, objectB, ignoreFields) {
    if (typeof objectA !== typeof objectB || (objectA === null && objectB !== null) || (objectB === null && objectA !== null)) {
        return false
    }

    if (typeof objectA === 'object') {
        return oneWayDeepCompareObject(objectA, objectB, ignoreFields) && oneWayDeepCompareObject(objectB, objectA, ignoreFields)
    } else {
        return objectA === objectB
    }
}

function sortByIndex(table) {
    let newTable = {}
    let keys = []

    for (const key in table) {
        let found
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] > key) {
                keys.splice(i, 0, key)
                found = true
                break
            }
        }

        if (!found) {
            keys.push(key)
        }
    }

    for (const key of keys) {
        newTable[key] = table[key]
    }

    return newTable
}

function createSvg(src) {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    if (src) {
        setSvgSource(svg, src)
    }
    return svg
}

function setSvgSource(item, src) {
    while (item.lastChild) {
        item.removeChild(item.lastChild)
    }

    if (!src.includes('.')) {
        src = svg(src)
    }

    let use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    use.setAttribute('href', src)
    item.appendChild(use)
}

function deselectAll() {
    const sel = window.getSelection ? window.getSelection() : document.selection;
    if (sel) {
        if (sel.removeAllRanges) {
            sel.removeAllRanges();
        } else if (sel.empty) {
            sel.empty();
        }
    }
}

let animateRootCustomPropertyCallN = {}
function animateRootCustomProperty(name, endValue, duration, convertToNumericalValue, convertToStringValue) {
    if (!animateRootCustomPropertyCallN[name]) {
        animateRootCustomPropertyCallN[name] = 1
    } else {
        animateRootCustomPropertyCallN[name]++;
    }

    let onN = animateRootCustomPropertyCallN[name]

    let startT = Date.now()
    let startValue = convertToNumericalValue(getComputedStyle(root).getPropertyValue(name))

    function handleFrame() {
        if (onN !== animateRootCustomPropertyCallN[name]) {
            return
        }
        const delta = Math.min(1, (Date.now() - startT) / duration)
        const numericalValue = startValue + (delta * (endValue - startValue))

        root.style.setProperty(name, convertToStringValue(numericalValue))

        if (delta < 1) {
            requestAnimationFrame(handleFrame)
        }
    }

    requestAnimationFrame(handleFrame)
}




generatePushID = (function () {
    
    const PUSH_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const length = PUSH_CHARS.length

    
    let lastPushTime = 0;

    
    
    
    
    let lastRandChars = [];

    return function () {
        let now = new Date().getTime();
        let duplicateTime = (now === lastPushTime);
        lastPushTime = now;

        let timeStampChars = new Array(8);
        for (let i = 7; i >= 0; i--) {
            timeStampChars[i] = PUSH_CHARS.charAt(now % length);
            
            now = Math.floor(now / length);
        }
        if (now !== 0) throw new Error('We should have converted the entire timestamp.');

        let id = timeStampChars.join('');

        if (!duplicateTime) {
            for (let i = 0; i < 12; i++) {
                lastRandChars[i] = Math.floor(Math.random() * length);
            }
        } else {
            
            let i
            for (i = 11; i >= 0 && lastRandChars[i] === length - 1; i--) {
                lastRandChars[i] = 0;
            }
            lastRandChars[i]++;
        }

        for (let i = 0; i < 12; i++) {
            id += PUSH_CHARS.charAt(lastRandChars[i]);
        }

        if (id.length !== 20) throw new Error('Length should be 20.');

        return id;
    };
})();

let lastPromptOptions = { CallN: 1, LastOpenTime: 0 } 

function showPrompt(options) {
    if (options) {
        options.LastOpenTime = Date.now()
        if (!options.ConfirmText) {
            options.ConfirmText = "Yes"
        }

        if (!options.Header) {
            options.Header = "Warning"
        }

        if (!options.Content) {
            options.Content = "Do you want to do that?"
        }

        if (options.Image) {
            let defaultStyles = {
                display: 'block',
                margin: '0 auto 2rem auto',
            }

            for (let key in options.ImageStyle) {
                defaultStyles[key] = options.ImageStyle[key]
            }

            options.ImageStyle = defaultStyles
        }

        if (!options.InputOptions) {
            options.InputOptions = {
                placeholder: 'some text'
            }
        }

        if (!options.InputOptions2) {
            options.InputOptions2 = {
                placeholder: 'some text'
            }
        }

        let promptContainer = document.getElementById('promptContainer')
        let promptBackground = document.getElementById('promptBackground')

        let prompt = document.createElement('div')
        prompt.className = 'prompt'

        let header = document.createElement('h1')
        let content = document.createElement("p")
        prompt.append(header, content)

        header.innerText = options.Header
        content.innerText = options.Content

        if (options.Image) {
            let image = document.createElement('img')
            image.src = options.Image
            for (let key in options.ImageStyle) {
                image.style[key] = options.ImageStyle[key]
            }
            prompt.append(image)
        }


        if (options.ShowInput) {
            options.InputFields = []
            for (let i = 0; i < options.ShowInput; i++) {
                let inputDiv = document.createElement('div')
                inputDiv.className = "fancyInputField promptInputContainer"

                let input = document.createElement("input")
                let div = document.createElement('div')
                inputDiv.append(input, div)

                let inputOptions = options["InputOptions" + ((i === 0) ? ('') : (i))]
                for (let key in inputOptions) {
                    input.setAttribute(key, inputOptions[key])
                }

                options.InputFields.push(input)
                prompt.append(inputDiv)
            }
        }

        let buttonContainer = document.createElement('div')
        buttonContainer.className = 'promptButtonContainer'

        let promptMainButton = document.createElement('button')
        promptMainButton.className = 'promptMainButton'
        promptMainButton.innerText = options.ConfirmText

        bindClick(promptMainButton, function (event) {
            if (promptMainButton.disabled) { return }
            resolveLastPrompt(true)
        })

        buttonContainer.append(promptMainButton)

        if (options.CancelText) {
            let promptOtherButton = document.createElement('button')
            promptOtherButton.className = 'promptOtherButton'
            promptOtherButton.innerText = options.CancelText

            bindClick(promptOtherButton, function (event) {
                resolveLastPrompt(false)
            })

            buttonContainer.append(promptOtherButton)
        }
        prompt.append(buttonContainer)

        promptContainer.append(prompt)
        promptContainer.style.display = "block"

        let headerW = header.getBoundingClientRect().width
        let contentW = Math.max(headerW, (window.innerWidth * 0.35))

        content.style.maxWidth = contentW + 'px'

        let enterWasDown = false
        function inputKey(event, wasUp) {
            if (event.code === "Enter") {
                if (!wasUp) {
                    enterWasDown = true
                } else if (enterWasDown) {
                    enterWasDown = false
                    if (promptMainButton.disabled) { return }
                    resolveLastPrompt(true)
                }
            } else {
                enterWasDown = false
                if (options.ValidateInput) {
                    const valid = options.ValidateInput(toFocus.value)
                    promptMainButton.disabled = !valid;
                }
            }
        }

        let toFocus
        if (options.ShowInput === 1) {
            toFocus = options.InputFields[0]

            toFocus.onkeydown = inputKey
            toFocus.onkeyup = function (event) {
                inputKey(event, true)
            }
        }

        if (toFocus) {
            toFocus.focus()
            if (toFocus.value.length > 0) {
                toFocus.setSelectionRange(0, toFocus.value.length)
            }
        }

        inputKey({
            code: "nope"
        })

        let finishedLast = true
        if (lastPromptOptions.NotFinished) {
            lastPromptOptions.AnimateOutBase.cancel()
            finishedLast = false
        }


        promptContainer.style.display = 'block'
        promptBackground.animate([
            CONST_PROMPT_ANIMATION.Background.Out,
            (!options.FillBackground) ? CONST_PROMPT_ANIMATION.Background.In : {
                opacity: 1,
                backgroundColor: "rgba(40, 40, 40, 1)",
            },
        ], finishedLast ? processAnimationOptions(CONST_PROMPT_ANIMATION.Options) : CONST_INSTANT_ANIMATION)

        prompt.animate([
            CONST_PROMPT_ANIMATION.Out,
            CONST_PROMPT_ANIMATION.In
        ], processAnimationOptions(CONST_PROMPT_ANIMATION.Options))

        options.CallN = lastPromptOptions.CallN + 1

        
        lastPromptOptions = options
        lastPromptOptions.Prompt = prompt
        lastPromptOptions.Closed = false

        
        return new Promise((resolve) => {
            lastPromptOptions.ResolvePromise = resolve
        });
    }
    console.log("Invalid options!!!!")
}

function resolveLastPrompt(confirmPressed) {
    if (!lastPromptOptions.Closed) {
        if (confirmPressed) {
            if (lastPromptOptions.InputFields) {
                let values = []

                for (const item of lastPromptOptions.InputFields) {
                    values.push(item.value)
                }

                lastPromptOptions.ResolvePromise(values)
            } else {
                lastPromptOptions.ResolvePromise(true)
            }
        } else {
            lastPromptOptions.ResolvePromise(false)
        }

        let prompt = lastPromptOptions.Prompt
        let promptContainer = document.getElementById('promptContainer')
        let promptBackground = document.getElementById('promptBackground')

        let onCall = lastPromptOptions.CallN

        lastPromptOptions.Closed = true
        lastPromptOptions.NotFinished = true

        lastPromptOptions.AnimateOutBase = promptBackground.animate([
            CONST_PROMPT_ANIMATION.Background.In,
            CONST_PROMPT_ANIMATION.Background.Out
        ], processAnimationOptions(CONST_PROMPT_ANIMATION.Options))

        lastPromptOptions.AnimateOutBase.onfinish = function () {
            if (onCall === lastPromptOptions.CallN) {
                promptContainer.style.display = "none"
                lastPromptOptions.NotFinished = false
            }
        }

        for (const child of promptContainer.children) {
            if (child.className === 'prompt' && !child.getAttribute('inprogress')) {
                child.setAttribute('inprogress', 'true')
                child.animate([
                    CONST_PROMPT_ANIMATION.In,
                    CONST_PROMPT_ANIMATION.Out
                ], processAnimationOptions(CONST_PROMPT_ANIMATION.Options)).onfinish = function () {
                    promptContainer.removeChild(child)
                }
            }
        }
    }
}

function handleSettingHasMenu(element, value) {
    if (value) {
        element.setAttribute('hasmenu', 'true')
    } else {
        element.removeAttribute('hasmenu')
    }

    if (element.getAttribute('continuehasmenu')) {
        handleSettingHasMenu(element.parentElement, value)
    }
}


let menuData = {
    callN: 0,
    animation: false,
    isOpen: false,
    openMenus: [],
}
function showMenu(options) {
    menuData.callN += 1
    let thisCall = menuData.callN

    document.body.parentElement.classList.remove("menuNotOpen")

    const dropdownContainer = document.getElementById('dropdownContainer')
    const dropdownBackgroundIn = document.getElementById('dropdownBackgroundIn')
    const dropdownBackgroundOut = document.getElementById('dropdownBackgroundOut')
    bindClick(dropdownBackgroundIn, function (event) {
        if (event.target === dropdownBackgroundIn) {
            closeMenu()
        }
    })

    const dropdown = document.createElement('div')
    dropdown.className = 'dropdown'

    const dropdownHeader = document.createElement('div')
    dropdownHeader.className = 'dropdownHeader'

    const dropdownItems = document.createElement('div')
    dropdownItems.className = 'dropdownItems'

    dropdown.append(dropdownHeader, dropdownItems)

    let x = '0px';
    let y = '0px';

    let selectedSource
    if (options.Source) {
        if (options.Source.getBoundingClientRect) {
            let realData = options.Source.getBoundingClientRect()
            let boundingBox = {
                left: realData.left,
                top: realData.top,
                width: realData.width,
                height: realData.height,
            }

            let style = window.getComputedStyle(options.Source)

            if (style.transform !== 'none') {
                if (style.transform.startsWith("matrix(")) {
                    let parsed = (style.transform.substring("matrix(".length, style.transform.length - 1)).split(", ")
                    let valid = true;
                    for (let i = 0; i < parsed.length; i++) {
                        if (i !== 0 && i !== 3) {
                            if (parsed[i] !== '0') {
                                valid = false;
                                break
                            }
                        }
                    }

                    if (valid) {
                        let scale = parseFloat(parsed[0])
                        if (parsed[0] === parsed[3] && scale !== 0) {
                            let offX = ((boundingBox.width - (boundingBox.width / scale)) / 2)
                            let offY = ((boundingBox.height - (boundingBox.height / scale)) / 2)
                            boundingBox.left += offX
                            boundingBox.top += offY

                            boundingBox.width -= offX * 2
                            boundingBox.height -= offY * 2
                        }
                    }
                }
            }

            if (options.OffsetX) {
                boundingBox.left += options.OffsetX
            }
            if (options.OffsetY) {
                boundingBox.top += options.OffsetY
            }

            if (!options.ExcludeMargin) {
                boundingBox.left -= parseInt(style.marginLeft)
                boundingBox.top -= parseInt(style.marginTop)
                boundingBox.width += parseInt(style.marginLeft) + parseInt(style.marginRight)
                boundingBox.height += parseInt(style.marginTop) + parseInt(style.marginBottom)
            }

            x = `${boundingBox.left}px`;
            y = `calc(${boundingBox.top + boundingBox.height}px + 0.35rem)`;

            if (options.OpenLeft) {
                x = `calc(${boundingBox.left + boundingBox.width}px + 0.35rem)`;
                y = `${boundingBox.top}px`;
            }

            if (options.OpenOn) {
                x = `${boundingBox.left}px`;
                y = `${boundingBox.top}px`;
            }

            selectedSource = options.Source

            handleSettingHasMenu(selectedSource, true)
            handleSettingHasMenu(selectedSource.parentElement, true)
        } else {
            x = `${options.Source.clientX}px`
            y = `calc(${options.Source.clientY}px + 0.25rem)`

            if (options.OpenLeft) {
                x = `calc(${options.Source.clientX}px + 0.25rem)`
                y = `${options.Source.clientY}px`
            }
        }
    }

    dropdown.style.left = '0px'
    dropdown.style.top = '0px'

    dropdownHeader.innerHTML = ''
    if (options.Header) {
        let p = document.createElement('p')
        p.innerText = options.Header
        dropdownHeader.append(p)
    }

    dropdownItems.innerHTML = ''

    for (const item of options.Items) {
        let div = document.createElement('div')
        div.className = "dropdownItem"

        let bar = document.createElement('div')
        bar.className = 'dropdownBar'
        div.append(bar)

        let svg = createSvg()
        if (item.Icon) {
            setSvgSource(svg, item.Icon)
            if (item.IconColor) {
                svg.style.setProperty("--icon-color", item.IconColor)
            }
        } else if (item.CustomIconGenerator) {
            item.Icon = true
            svg = item.CustomIconGenerator(item.IconColor)
            svg.classList.add('dropdownCustomIcon')
        } else {
            svg.style.display = 'none'
        }

        function runHandler(element) {
            closeMenu(dropdown)

            if (item.Handler) {
                item.Handler(element)
            }
        }

        if (item.ShowHeaderIcon || item.OnlyShowHeaderIcon) {
            let div1 = document.createElement('div')
            div1.style.setProperty("--display-text", JSON.stringify(item.Text))
            div1.className = "dropdownHeaderIconContainer fancyDialog"

            let div2 = document.createElement('div')
            div2.className = "dropdownHeaderIconContainerContainer"

            let iconI
            if (!item.CircleIcon) {
                iconI = createSvg(item.Icon)
                iconI.setAttribute('class', 'dropdownHeaderIcon')
            } else {
                iconI = document.createElement('div')
                iconI.className = "dropdownHeaderCircleIcon"
            }
            if (item.IconColor) {
                iconI.style.setProperty("--icon-color", item.IconColor)
            }

            if (item.Handler) {
                bindClick(div1, function (event) {
                    makeRipple(div2, event)
                    runHandler(div1)
                })
            }

            div2.append(iconI)
            div1.append(div2)
            dropdownHeader.append(div1)
        }

        if (!item.OnlyShowHeaderIcon) {
            let text = document.createElement('p')
            text.innerText = item.Text

            if (!item.Icon) {
                text.style.paddingLeft = "0"
            }

            bindClick(div, function (event) {
                makeRipple(div, event)

                if (item.HasToggle) {
                    const toggle = div.querySelector('.fancyToggle')
                    if (toggle) {
                        swapToggle(toggle)
                    }
                }

                runHandler(div)
            })

            div.append(svg, text)

            if (item.HelpText) {
                let helpContainer = document.createElement('div')
                helpContainer.append(createSvg('help'))
                helpContainer.style.setProperty('--display-text', JSON.stringify(item.HelpText))
                helpContainer.classList.add('fancyDialog', 'dropdownHelpContainer')
                div.append(helpContainer)
            }

            if (item.HasCheck) {
                let check = document.createElement('div')
                check.append(createSvg('check'))
                check.classList.add('dropdownCheck')
                div.append(check)
            }

            if (item.HasToggle) {
                const toggle = document.createElement('div')
                toggle.setAttribute('disabledefaulttoggle', 'true')
                toggle.classList.add('fancyToggle')

                if (item.DefaultToggle) {
                    swapToggle(toggle)
                }

                div.append(toggle)
            }

            if (item.Description) {
                let breaker = document.createElement('div')
                breaker.className = "flexBreak"
                div.append(breaker)

                let desc = document.createElement('p2')
                desc.innerText = item.Description
                div.append(desc)

                dropdownItems.style.maxWidth = "15vw"
            }

            dropdownItems.append(div)
        }
    }

    if (options.EnableMaxHeight) {
        dropdownItems.style.maxHeight = "35vh"
    }

    let childrenC = dropdownHeader.children.length
    dropdownHeader.style.gridTemplateColumns = `1fr repeat(${dropdownHeader.children.length}, auto)`

    if (options.Header) {
        dropdownHeader.style.gridTemplateColumns = `1fr repeat(${dropdownHeader.children.length - 1}, auto)`
    }

    if (options.HeaderIconRows) {
        if (options.Header) {
            dropdownHeader.style.gridTemplateRows = `auto repeat(${Math.floor(((dropdownHeader.children.length - 1) / options.HeaderIconRows) + 1)}, auto)`
            dropdownHeader.style.gridTemplateColumns = `repeat(${options.HeaderIconRows}, auto)`
        } else {
            dropdownHeader.style.gridTemplateRows = `repeat(${Math.floor(((dropdownHeader.children.length) / options.HeaderIconRows) + 1)}, auto)`
            dropdownHeader.style.gridTemplateColumns = `repeat(${options.HeaderIconRows}, auto)`
        }

        dropdownHeader.querySelector('p').style.gridRow = '1';
        dropdownHeader.querySelector('p').style.gridColumn = `1 / ${options.HeaderIconRows + 1}`;
    }

    if (dropdownItems.children.length > 0) {
        dropdownHeader.querySelector('p').style.paddingLeft = "0.75rem"
    }

    if (dropdownItems.children.length > 0 || (childrenC > 0 && options.Header)) {
        dropdown.style.setProperty("--pad-top", "0")
    } else {
        dropdown.style.setProperty("--pad-top", "0.5rem")
    }

    dropdownContainer.append(dropdown)

    

    dropdownContainer.style.display = 'block'
    dropdownBackgroundIn.style.display = 'block'
    dropdownBackgroundOut.style.display = 'none'

    let computed = dropdown.getBoundingClientRect()
    let width = computed.width
    let height = computed.height

    dropdown.style.left = x
    dropdown.style.top = y

    let root = document.body.getBoundingClientRect()

    let bounds = dropdown.getBoundingClientRect()
    if (bounds.top + height >= root.height) {
        let diff = bounds.top + height - root.height

        dropdown.style.top = `calc(${(bounds.top - diff)}px - 1rem)`
    }

    bounds = dropdown.getBoundingClientRect()
    if (bounds.left + width >= root.width) {
        let diff = bounds.left + width - root.width

        dropdown.style.left = `calc(${(bounds.left - diff)}px - 1rem)`
    }

    if (menuData.openMenus.length <= 0) {
        if (menuData.animation) {
            menuData.animation.cancel()
        }

        let options = processAnimationOptions(CONST_DROPDOWN_ANIMATION.Options)

        if (menuData.isOpen) {
            options = CONST_INSTANT_ANIMATION
        }

        menuData.animation = dropdownBackgroundIn.animate([
            CONST_DROPDOWN_ANIMATION.Background.Out,
            CONST_DROPDOWN_ANIMATION.Background.In,
        ],
            options
        )

        menuData.animation.onfinish = function () {
            if (thisCall === menuData.callN) {
                menuData.isOpen = true
            }
        }
    }

    dropdown.animate([
        CONST_DROPDOWN_ANIMATION.Out,
        CONST_DROPDOWN_ANIMATION.In
    ],
        processAnimationOptions(CONST_DROPDOWN_ANIMATION.Options)
    )

    menuData.openMenus.push({
        selectedSource: selectedSource,
        menu: dropdown,
    })
}

function closeMenu(keepMenu) {
    menuData.callN += 1
    let thisCall = menuData.callN

    const dropdownContainer = document.getElementById('dropdownContainer')
    const dropdownBackgroundIn = document.getElementById('dropdownBackgroundIn')
    const dropdownBackgroundOut = document.getElementById('dropdownBackgroundOut')

    let toClose = []

    for (let i = menuData.openMenus.length - 1; i >= 0; i--) {
        const data = menuData.openMenus[i]
        if (data.menu !== keepMenu || !keepMenu) {
            toClose.push(data)
            menuData.openMenus.splice(i, 1)
        }
    }

    for (const data of toClose) {
        const menu = data.menu
        menu.animate([
            CONST_DROPDOWN_ANIMATION.In,
            CONST_DROPDOWN_ANIMATION.Out
        ],
            processAnimationOptions(CONST_DROPDOWN_ANIMATION.Options)
        ).onfinish = function () {
            dropdownContainer.removeChild(menu)
        }

        const selectedSource = data.selectedSource
        if (selectedSource) {
            handleSettingHasMenu(selectedSource, false)
            handleSettingHasMenu(selectedSource.parentElement, false)
            selectedSource.style.cursor = 'pointer' 
            selectedSource.style.cursor = ''
        }
    }

    if (menuData.openMenus.length <= 0) {
        if (menuData.animation) {
            menuData.animation.cancel()
        }

        dropdownBackgroundIn.style.display = 'none'
        dropdownBackgroundOut.style.display = 'block'
        menuData.animation = dropdownBackgroundOut.animate([
            CONST_DROPDOWN_ANIMATION.Background.In,
            CONST_DROPDOWN_ANIMATION.Background.Out
        ],
            processAnimationOptions(CONST_DROPDOWN_ANIMATION.Options)
        )

        menuData.animation.onfinish = function () {
            if (thisCall === menuData.callN) {
                menuData.isOpen = false
                dropdownContainer.style.display = 'none'
                dropdownBackgroundOut.style.display = 'none'
            }
        }

        document.body.parentElement.classList.add("menuNotOpen")
    }
}

function handleError(error) {
    if (error) {
        if (typeof (error) === 'string') {
            showPrompt({
                Header: "Error",
                Content: error,
                ConfirmText: "Dismiss",
            })
        } else {
            let header = "Error"
            let content = error.message

            if (error.code === 'PERMISSION_DENIED') {
                header = "Access Changed"
                content = "You can no longer perform that action, perhaps your access was changed?"
            }

            showPrompt({
                Header: header,
                Content: content,
                ConfirmText: "Dismiss",
            })
            console.log(error)
        }
    } else {
        showPrompt({
            Header: "Error",
            Content: "Something went wrong, try again later.",
            ConfirmText: "Okay",
        })
    }
}

function showPage(name) {
    const data = CONST_PAGES_DATA[name]

    function doCheck(key) {
        const thisData = CONST_PAGES_DATA[key]

        if (!thisData || !thisData.Initializer) {
            let element = page.querySelector("#" + key)
            if (name === key) {
                element.style.display = 'block'
            } else {
                element.style.display = 'none'
            }
        } else {
            if (name === key) {
                thisData.Initializer()
            } else {
                thisData.Deinitializer()
            }
        }
    }

    const page = document.getElementById('page')
    for (const key in CONST_PAGES_DATA) {
        doCheck(key)
    }
    doCheck('workspace')

    let mainHeader = document.getElementById('main_header')
    let workspaceHeader = document.getElementById('workspace_header')
    if (name === 'workspace') {
        mainHeader.style.display = 'none'
        workspaceHeader.style.display = 'grid'
    } else {
        updatePath('/' + name)
        workspaceHeader.style.display = 'none'
        if (data && data.Header) {
            mainHeader.style.display = 'block'
            mainHeader.querySelector('p').innerText = data.Header
        } else {
            mainHeader.style.display = 'none'
        }
    }

    let sidebarButtons = document.getElementById('sidebarButtons').children
    for (const button of sidebarButtons) {
        if (button.getAttribute('openPage') === name) {
            updateSelectable(button)
        }
    }
}

let alreadyAnimatedUp = false;
function animateTitleUp() {
    if (alreadyAnimatedUp) { return }
    alreadyAnimatedUp = true

    const welcomeTitle = document.getElementById('welcome_title')
    let secondTitle = welcomeTitle.cloneNode(true)
    secondTitle.style.position = 'static'
    secondTitle.style.opacity = 0;
    secondTitle.style.transform = 'scale(1)'
    secondTitle.removeChild(secondTitle.querySelector('#loadingCircleContainer'))
    welcomePage.insertBefore(secondTitle, welcomeTitle)

    welcomeTitle.animate([
        {
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
        {
            top: '0%',
            transform: 'translate(-50%, 0%)',
        },
    ], {
        duration: 250,
        fill: 'forwards',
    })

    const loadingCircleContainer = document.getElementById('loadingCircleContainer')
    loadingCircleContainer.style.opacity = '0'
}

function animateTitleDown() {
    if (alreadyAnimatedUp) {
        let title = document.querySelectorAll('#welcome_title')[1]
        title.animate([{
            top: '0%',
            transform: 'translate(-50%, 0%)',
        }, {
            top: '50%',
            transform: 'translate(-50%, -50%)',
        }], {
            duration: 250,
            fill: 'forwards'
        }).onfinish = function () {
            alreadyAnimatedUp = false;
        }

        const loadingCircleContainer = document.getElementById('loadingCircleContainer')
        for (const child of loadingCircleContainer.children) {
            child.style.animation = 'none'
            setTimeout(function () {
                child.style.animation = ''
            }, 500)
        }
        loadingCircleContainer.style.opacity = '1'
    }
}

function handleNewUser() {
    if (!welcomePage || welcomePage.getAttribute('notFinished')) {
        requestAnimationFrame(handleNewUser)
        return
    }
    animateTitleUp()

    let signupContainer = document.getElementById('signup_container')
    signupContainer.style.display = 'block'

    let hasVisited = getLocalData('visited', true, true)
    if (!hasVisited) {
        setLocalData('visited', 'true', true)
        showPrompt({
            Header: "Notice",
            Content: "This application is still in development, so expect frequent bugs & such. Otherwise, have a great day!",
            ConfirmText: "Let's Go!",
        })
    }

    let user = getLocalData('existing-user', true, true)
    if (user) {
        openSignup(2, false, user)
    } else {
        let signup_description = document.getElementById('signup_description')
        signup_description.animate([
            {
                opacity: 0,
                transform: "scale(0.75)",
            },
            {
                opacity: 1,
                transform: "scale(1)",
            },
        ], {
            delay: 0,
            duration: 250,
            fill: 'forwards'
        })

        let signup_content = document.getElementById('signup_content')
        signup_content.animate([
            {
                opacity: 0,
                transform: "scale(0.75)",
            },
            {
                opacity: 1,
                transform: "scale(1)",
            },
        ], {
            delay: 125,
            duration: 250,
            fill: 'forwards'
        })
        let signup_content2 = document.getElementById('signup_content2')
        signup_content2.animate([
            {
                opacity: 0,
                transform: "scale(0.75)",
            },
            {
                opacity: 1,
                transform: "scale(1)",
            },
        ], {
            delay: 250,
            duration: 250,
            fill: 'forwards'
        })
    }
}

function openSignup(type, isInstant, fillField) {
    if (welcomePage.getAttribute('transitionDetails')) {
        if (isInstant || fillField) {
            requestAnimationFrame(function () {
                openSignup(type, isInstant, fillField)
            })
        }
        return
    }

    let signupPage = document.getElementById('signup')
    signupPage.animate([
        {
            left: '50%',
            opacity: 1,
            transform: 'translateX(-50%) scale(1)',
        },
        {
            left: '50%',
            opacity: 0,
            transform: 'translateX(-50%) scale(0.75)',
        }
    ], {
        duration: isInstant ? 0 : 250,
        fill: 'forwards',
    }).onfinish = function () {
        signupPage.style.display = 'none'
    }
    signupPage.style.position = 'absolute'

    let oldDetails = document.getElementById('details')
    const existedBefore = oldDetails.style.display === 'block'

    oldDetails.style.display = 'block'
    oldDetails.style.width = '100%'
    let bounds = oldDetails.getBoundingClientRect()

    let detailsPage = oldDetails.cloneNode(true)
    oldDetails.parentElement.insertBefore(detailsPage, oldDetails)

    let tX = '0%'
    oldDetails.id = 'not_details'
    if (existedBefore) {
        tX = '-25%'
        oldDetails.style.position = 'absolute'
        oldDetails.style.left = '50%'
        oldDetails.style.top = bounds.top + 'px'
        oldDetails.animate([
            {
                opacity: 1,
                transform: 'translateX(-50%) scale(1)',
            },
            {
                opacity: 0,
                transform: 'translateX(-25%) scale(0.75)',
            }
        ], {
            duration: isInstant ? 0 : 250,
            fill: 'forwards',
        }).onfinish = function () {
            oldDetails.parentElement.removeChild(oldDetails)
        }
    } else {
        oldDetails.parentElement.removeChild(oldDetails)
    }

    detailsPage.style.display = 'block'
    welcomePage.style.overflow = 'hidden'
    welcomePage.setAttribute('transitionDetails', 'true')
    detailsPage.animate([
        {
            opacity: 0,
            transform: `translateX(${tX}) scale(0.75)`,
        },
        {
            opacity: 1,
            transform: `translateX(0%) scale(1)`,
        }
    ], {
        duration: isInstant ? 0 : 250,
        fill: 'forwards',
    }).onfinish = function () {
        welcomePage.removeAttribute('transitionDetails')
        welcomePage.style.overflow = 'auto'
    }

    let details_header = document.getElementById('details_header')
    let details_header2 = document.getElementById('details_header2')
    let form = document.getElementById('detailsForm')
    let gettingStartedInput = document.getElementById('gettingStartedInput')
    let emailInput = document.getElementById('emailInput')
    let passwordInput = document.getElementById('passwordInput')
    emailInput.value = fillField || gettingStartedInput.value
    passwordInput.value = ""

    let errorText = document.getElementById('details-error-text')
    errorText.innerText = ""
    let otherText = document.getElementById('details-other-text')

    let submit = form.querySelector("input[type=submit]")
    submit.disabled = false;

    if (type === 2) {
        
        const rememberedUsername = getLocalData('existing-username', true, true)
        details_header.innerText = rememberedUsername ? `Welcome back, ${rememberedUsername}!` : "Welcome Back!"
        details_header2.innerText = "Enter your credentials..."
        submit.value = "Login"
        passwordInput.autocomplete = "current-password"
        otherText.innerHTML = "Sign Up Instead"
        bindClick(otherText, function () {
            openSignup(1)
        })
        form.onsubmit = function (event) {
            event.preventDefault()
            submit.disabled = true;
            processLogin(emailInput.value, passwordInput.value, errorText, submit)
        }
    } else {
        
        details_header.innerText = "You're Almost There!"
        details_header2.innerText = "Just a few more things..."
        submit.value = "Sign Up"
        passwordInput.autocomplete = "new-password"
        otherText.innerHTML = "Login Instead"
        bindClick(otherText, function () {
            openSignup(2)
        })
        form.onsubmit = function (event) {
            event.preventDefault()
            submit.disabled = true;
            processSignup(emailInput.value, passwordInput.value, errorText, submit)
        }
    }
}

function processSignup(email, password, infoText, button) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            
        })
        .catch((error) => {
            
            infoText.innerText = error.message;
            button.disabled = false;
        });
}

function processLogin(email, password, infoText, button) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            
        })
        .catch((error) => {
            
            let message = error.message

            if (error.code === "auth/user-not-found") {
                message = "User email not found!"
            } else if (error.code === "auth/wrong-password") {
                message = "Incorrect password!"
            }

            infoText.innerText = message;
            button.disabled = false;
        });
}

function processSignOut() {
    firebase.auth().signOut().then(() => {
        window.location = "";
    })
}

function handleSignoutButton() {
    showPrompt({
        Header: "Log Out",
        Content: "Do you wish to log out?",
        ConfirmText: "Log Out",
        CancelText: "Cancel",
    }).then((confirmed) => {
        if (confirmed) {
            processSignOut()
        }
    })
}

function loadAuthUser(authUser, skipToCheckout) {
    let signup_container = document.getElementById('signup_container')

    let notice = document.getElementById('notice')
    let emailNotice = document.getElementById('emailNotice')

    aUser = authUser;
    uId = aUser.uid;

    
    notice.style.display = "block"

    
    let bounds = signup_container.getBoundingClientRect()
    signup_container.style.position = 'absolute'
    signup_container.style.left = '50%'
    signup_container.style.top = bounds.top + 'px'

    signup_container.animate([
        {
            opacity: 1,
            transform: 'translateX(-50%) scale(1)',
        }, {
            opacity: 0,
            transform: 'translateX(-50%) scale(0.75)',
        }
    ], {
        duration: 250,
        fill: 'forwards'
    })

    
    if (!authUser.emailVerified) {
        animateTitleUp()
        emailNotice.animate([
            {
                opacity: 0,
                transform: 'scale(0.75)',
            }, {
                opacity: 1,
                transform: 'scale(1)',
            }
        ], {
            duration: 250,
            fill: 'forwards'
        })

        emailNotice.querySelectorAll("p")[1].innerText = aUser.email

        const actionCodeSettings = {
            url: window.location.origin + window.location.pathname,
            handleCodeInApp: false,
        };

        aUser.sendEmailVerification(actionCodeSettings)
        return
    }

    
    emailNotice.style.display = "none"

    animateTitleDown()

    
    let theirData = db.ref('users/' + uId)

    theirData.get().then((snapshot) => {
        userData = snapshot.val();
        checkoutNewUserData(!snapshot.exists())
    }).catch(err => {
        window.location.reload()
    })
}

function checkoutNewUserData(noData) {
    const usernameNotice = document.getElementById('usernameNotice')

    if (!noData && userData.username) {
        setLocalData('existing-user', aUser.email, true)
        setLocalData('existing-username', userData.username, true)
        
        userSettings = userData.settings || {}

        
        for (const key in CONST_DEFAULT_SETTINGS) {
            if (userSettings[key] === undefined) {
                userSettings[key] = CONST_DEFAULT_SETTINGS[key]
            } else if (typeof CONST_DEFAULT_SETTINGS[key] === 'object') {
                for (const index in CONST_DEFAULT_SETTINGS[key]) {
                    if (userSettings[key][index] === undefined) {
                        userSettings[key][index] = CONST_DEFAULT_SETTINGS[key][index]
                    }
                }
            }
        }

        lastUserSettings = deepCopy(userSettings)
        
        onUserSettingsChanged()

        
        closeLoginPage()
    } else {
        animateTitleUp()
        usernameNotice.style.display = "block"
        usernameNotice.animate([
            {
                opacity: 0,
                transform: 'scale(0.75)',
            }, {
                opacity: 1,
                transform: 'scale(1)',
            }
        ], {
            duration: 250,
            fill: 'forwards'
        })
    }
}

function isValidUsername(username) {
    if (username.length === 0) {
        return [false, "Please enter a username!"]
    }

    if (username.length < 5) {
        return [false, "Usernames must be at least 5 characters long!"]
    }

    if (username.length > getMaxStringLengthFor('user')) {
        return [false, `Usernames must be ${getMaxStringLengthFor(username)} characters or less!`]
    }

    if (username.includes(" ")) {
        return [false, "Usernames can't have spaces, use underscores instead!"]
    }

    let matchRegEx = "^[a-zA-Z0-9_]{5,20}$" 
    if (!username.match(matchRegEx)) {
        return [false, "Usernames must be alphanumerical (A-Z, a-z, 0-9)"]
    }

    return [true]
}

function claimNewUsername(username, removeOldFirst) {
    return new Promise(async (resolve, reject) => {
        try {

            const user = 'users/' + uId
            if (removeOldFirst) {
                const removalUpdates = {
                    [user + "/username"]: null,
                    ['usernames/' + userData.username.toLowerCase()]: null,
                }

                await db.ref().update(removalUpdates)
            }

            const updates = {
                [user + "/username"]: username,
                ['usernames/' + username.toLowerCase()]: uId,
            }

            await db.ref().update(updates)

            resolve(true)
        } catch (e) {
            reject(e)
        }
    })
}

let usernameCheckData = {
    CallN: 0,
    Last: '',
    Setting: false,
};
async function handleUsernameCheck(final) {
    const usernameNotice = document.getElementById('usernameNotice')
    const usernameInput = document.getElementById('usernameInput')
    const warning = usernameNotice.querySelector(".warning")

    let entered = usernameInput.value;
    if (usernameCheckData.Setting || (usernameCheckData.Last === entered && !final)) {
        return
    }
    usernameCheckData.Last = entered

    let submitButton = usernameNotice.querySelector("button")
    submitButton.setAttribute('blocked', 'true')

    let allowed = isValidUsername(entered)

    usernameCheckData.CallN++;
    const thisN = usernameCheckData.CallN;

    if (allowed[0]) {
        const taken = await awaitUsernameTaken(entered)
        if (thisN !== usernameCheckData.CallN) {
            return
        }

        if (taken) {
            allowed = [false, "That username is taken, sorry!"]
        }
    }

    warning.style.display = 'grid'
    if (!allowed[0]) {
        warning.querySelector("p").innerText = allowed[1]
        return
    }
    warning.style.display = 'none'

    if (final) {
        usernameCheckData.Setting = true

        let did = await claimNewUsername(entered, false).catch(handleError)
        if (did === true) {
            if (userData) {
                userData.username = entered
            }
            window.location.reload()
        }
    }
    usernameCheckData.Setting = false
    submitButton.removeAttribute('blocked')
}

function loadProject(id) {
    return new Promise(resolve => {
        const ref = db.ref("/projects/" + id)
        let connection

        let aborted = false;
        function abortConnection() {
            if (aborted) {
                return
            }
            aborted = true;
            if (loadedProjects[id] != null) {
                delete loadedProjects[id]
            }

            removeProjectFromSidebar(id)

            ref.off("value", connection)
        }

        maid.push(abortConnection)

        connection = ref.on("value", (snapshot) => {
            if (snapshot.exists()) {
                loadedProjects[id] = snapshot.val()
                updateProjectToSidebar(id)
            } else {
                abortConnection()
            }

            resolve(true)
        }, (error) => {
            if (error.code === "PERMISSION_DENIED") {
                
                abortConnection()
                resolve(true)
            } else {
                resolve(false)

                handleError(error)
            }
        })
    })
}

function loadAccessibleProjects() {
    removeProjectFromSidebar(false)

    return new Promise(async (resolve) => {
        const ref = db.ref("users/" + uId + "/access")
        let connection
        connection = ref.on('value', async (snapshot) => {
            let list = []
            if (snapshot.exists()) {
                let data = snapshot.val()
                for (const id in data) {
                    if (!loadedProjects[id]) {
                        list.push(id)
                    }
                }
            }

            let promises = []

            for (const id of list) {
                promises.push(loadProject(id))
            }

            await Promise.all(promises)
            resolve()
        }, (error) => {
            
            window.location.reload()
        })

        let ran = false;
        maid.push(function () {
            if (ran) {
                return
            }
            ran = true;

            ref.off('value', connection)
        })
    })
}

function handleRequestedPath() {
    let isValidPath = false;
    if (requestedPath) {
        if (requestedPath.startsWith("/")) {
            let rest = requestedPath.substring(1)
            if (rest.startsWith("p/")) {
                let nextBit = rest.substring(2)
                if (nextBit.includes("/")) {
                    let bits = nextBit.split("/")
                    if (bits.length >= 2 && bits.length <= 3) {
                        const pId = bits[0]
                        const sId = bits[1]
                        const vId = bits[2]
                        if (loadedProjects[pId]) {
                            if (loadedProjects[pId].spaces) {
                                if (loadedProjects[pId].spaces[sId]) {
                                    if (vId) {
                                        currentSelectedView = vId
                                    }
                                    selectProjectSpace(pId, sId)
                                    isValidPath = true;
                                }
                            }
                        }
                    }
                }
            } else if (CONST_PAGES_DATA[rest]) {
                showPage(rest)
                isValidPath = true;
            }
        }

        
        if (!isValidPath) {
            updatePath("/")
        } else {
            return
        }
    }

    showPage('home')
}

function updateLastOnline() {
    let newValue = firebase.database.ServerValue.TIMESTAMP
    db.ref("users/" + uId + "/lastOnline").set(newValue).then(() => {

    }).catch(ignored => {
        
    })
}

async function closeLoginPage() {
    document.getElementById('notice').style.display = 'none'

    
    if (getLocalData("sidebar-collapsed")) {
        handleCollapseButton(document.getElementById('collapseButton'), true, true)
    }

    
    setLocalData('existing-user', aUser.email, true)

    
    await loadAccessibleProjects()

    
    userLoadedResolve()
    userLoaded = true

    
    handleRequestedPath()

    
    setInterval(updateLastOnline, CONST_UPDATE_LAST_ONLINE_EVERY)
    updateLastOnline()

    function zoomOut() {
        let versionText = document.getElementById('versionText')
        welcomePage.animate([
            {
                opacity: 1,
                transform: `translate(-50%, 0%) scale(1)`
            },
            {
                opacity: 0,
                transform: `translate(-50%, 0%) scale(2)`
            },
        ], {
            duration: 250,
            fill: 'forwards'
        }).onfinish = function () {
            welcomePage.style.display = "none"
            versionText.style.display = "none"
        }

        versionText.animate([
            {
                opacity: 1,
            },
            {
                opacity: 0,
            },
        ], {
            duration: 125,
            fill: 'forwards'
        })

        contentPage.style.display = "grid"
    }

    function doWait() {
        if (!welcomePage.getAttribute('notFinished') && !alreadyAnimatedUp) {
            zoomOut()
            return
        }
        requestAnimationFrame(doWait)
    }
    doWait()
}


function handleResignIn() {
    return new Promise((async (resolve) => {
        let data = await showPrompt({
            Header: "Verify",
            Content: "Enter your credentials again before proceeding.",
            ShowInput: 1,
            InputOptions: {
                id: "authPasswordInput",
                placeholder: "Enter your password...",
                type: "password",
                autocomplete: "current-password",
            },
            ConfirmText: "Verify",
            CancelText: "Cancel",
        })

        if (!data) {
            resolve(false)
        } else {
            let providedPassword = data[0]

            let credential = firebase.auth.EmailAuthProvider.credential(
                aUser.email,
                providedPassword
            )
            aUser.reauthenticateWithCredential(credential).then(() => {
                resolve(true)
            }).catch(async (error) => {
                
                let tryAgain = await showPrompt({
                    Header: "Try Again",
                    Content: "That password is incorrect!",
                    ConfirmText: "Retry",
                    CancelText: "Cancel",
                })

                if (!tryAgain) {
                    resolve(false)
                }

                
                let nextResult = await handleResignIn()
                resolve(nextResult)
            })
        }
    }))
}


function onUserSettingsChanged() {
    let s = userSettings
    let newTheme = CONST_THEME_CLASSES[getCurrentTheme()];
    for (const data of CONST_THEME_CLASSES) {
        if (data === newTheme) {
            document.body.parentElement.classList.add(newTheme.Class)
        } else {
            document.body.parentElement.classList.remove(data.Class)
        }
    }

    changeAccentColor(s.color)
    changeZoomSetting(s.zoom)
    updateTimeFormatSetting(true, s.timeFormat)
    updateTimeFormatSetting(false, s.dateFormat)

    if (s.preferences) {
        const content = document.getElementById('yourSettingsContent')
        let toggles = content.querySelectorAll(".settingsToggle")
        for (const toggle of toggles) {
            let refname = toggle.getAttribute('refname')
            let fancyToggle = toggle.querySelector(".fancyToggle")
            if (s.preferences[refname]) {
                fancyToggle.setAttribute('selected', 'true')
            } else {
                fancyToggle.removeAttribute('selected')
            }
        }
    }

    if (getPreference('iconPop')) {
        document.body.classList.remove('noIconPop')
    } else {
        document.body.classList.add('noIconPop')
    }

    if (getPreference('enableAnimation')) {
        document.body.classList.remove('noAnimation')
    } else {
        document.body.classList.add('noAnimation')
    }

    if (getPreference('dullColors')) {
        document.body.classList.add('dullColors')
    } else {
        document.body.classList.remove('dullColors')
    }

    let greetText = document.getElementById('greetUserText')
    greetText.innerText = `Welcome, ${userData.username}!`

    let nameText = document.getElementById('userProfileName')
    nameText.innerText = userData.username;

    let settingsUsernameInput = document.getElementById('settingsUsernameInput')
    settingsUsernameInput.value = userData.username;

    let settingsEmailInput = document.getElementById('settingsEmailInput')
    settingsEmailInput.value = aUser.email;

    let settingsPasswordInput = document.getElementById('settingsPasswordInput')
    settingsPasswordInput.value = '';

    let avatar = document.getElementById('userProfileImage')
    let settingsAvatar = document.getElementById('settingsUserProfileImage')
    avatar.src = userData.avatar || res("unknownUser.png")
    settingsAvatar.src = avatar.src
}

function updateUserSettings() {
    onUserSettingsChanged()

    if (aUser) {
        return new Promise((resolve => {
            db.ref("users/" + uId + "/settings").set(userSettings).then(() => {
                lastUserSettings = deepCopy(userSettings)
                resolve(true)
            }).catch((error) => {
                resolve(false)
            })
        }))
    }
}

async function handleCloseSettingsButton() {
    if (areUserSettingsSynced()) {
        let container = document.getElementById('yourSettingsContainer')
        const lastPath = container.getAttribute('lastPath')
        if (lastPath) {
            if (requestedPath === "/settings") {
                showPage('home')
            } else {
                requestedPath = lastPath
                handleRequestedPath()
            }
        }
    } else {
        let revert = await showPrompt({
            Header: "Warning",
            Content: "You have unsaved changes! Are you sure you want to exit?",
            ConfirmText: "Revert Changes",
            CancelText: "Cancel",
        })
        if (revert) {
            handleUserSettingsSaveButton(false)
            handleCloseSettingsButton()
        }
    }
}

function openSettingsPage(button, excludeScroll, instant) {
    let name = button.getAttribute('pagename')

    for (const thisButton of button.parentElement.children) {
        if (button === thisButton) {
            thisButton.setAttribute('selected', 'true')
        } else {
            thisButton.removeAttribute('selected')
        }
    }

    let isNewPage = true

    let content = document.getElementById('yourSettingsContent')
    for (const child of content.children) {
        let thisName = child.getAttribute('pagename')
        if (name === thisName) {
            if (child.style.display === 'block') {
                isNewPage = false
            } else {
                child.style.display = 'block'
            }
        } else {
            if (thisName) {
                child.style.display = 'none'
            }
        }
    }

    if (!excludeScroll) {
        const scrollTo = button.getAttribute('scrollto')
        if (scrollTo) {
            const element = content.querySelector("#" + scrollTo)
            content.scrollTo({
                top: element.getBoundingClientRect().top + content.scrollTop,
                left: 0,
                behavior: (isNewPage || instant) ? "auto" : "smooth",
            })
        } else {
            content.scrollTo({
                top: 0,
                left: 0,
                behavior: instant ? "auto" : "smooth",
            })
        }
    }
}

function areUserSettingsSynced() {
    function checkP(check, prefix) {
        for (const key in check[prefix]) {
            if (userSettings[prefix][key] !== lastUserSettings[prefix][key]) {
                return false
            }
        }

        return true
    }

    for (const key in userSettings) {
        if (typeof CONST_DEFAULT_SETTINGS[key] !== 'object') {
            if (userSettings[key] !== lastUserSettings[key]) {
                return false
            }
        } else {
            if (!checkP(userSettings, key)) {
                return false
            }
        }
    }

    return true
}

function handleNewUserSettings() {
    handleAccountSetting('username', false, false)
    handleAccountSetting('email', false, false)
    handleAccountSetting('password', false, false)
    cachedScrollbarWidthData = null
    onUserSettingsChanged()
    const yourSettingsSave = document.getElementById('yourSettingsSave')
    const yourSettingsRevert = document.getElementById('yourSettingsRevert')
    const synced = areUserSettingsSynced()


    if (synced) {
        yourSettingsSave.innerText = "Saved"
        yourSettingsSave.disabled = true
        yourSettingsRevert.style.opacity = "0"
        yourSettingsRevert.style.cursor = "default"
    } else {
        yourSettingsSave.innerText = "Save"
        yourSettingsSave.disabled = false
        yourSettingsRevert.style.opacity = "1"
        yourSettingsRevert.style.cursor = "pointer"
    }
}

async function handleUserSettingsSaveButton(save) {
    let container = document.getElementById('yourSettingsSaveContainer')
    let button = document.getElementById('yourSettingsSave')
    if (!container.getAttribute('processing') && !button.disabled) {
        if (save) {
            
            container.setAttribute('processing', 'true')
            button.innerText = "Saving..."
            button.disabled = true

            
            if (lastUserSettings.preferences.securityCheck && !userSettings.preferences.securityCheck) {
                const authed = await handleResignIn()
                if (!authed) {
                    userSettings.preferences.securityCheck = true
                }
            }

            
            let success = await updateUserSettings()
            handleNewUserSettings()

            if (!success) {
                handleError("Something went wrong! Try again later.")
            }
        } else {
            userSettings = deepCopy(lastUserSettings)
            handleNewUserSettings()
        }

        container.removeAttribute('processing')
    }
}

function getPreference(name) {
    return userSettings && userSettings.preferences && !!userSettings.preferences[name]
}

function getCurrentTheme() {
    return getPreference('dark') ? 1 : 0
}

function processAnimationOptions(options) {
    let newOptions = {}

    for (const key in options) {
        newOptions[key] = options[key]
    }

    if (getPreference('enableAnimation') === false) {
        newOptions.duration = 0;
    }

    return newOptions
}

function changeUserProfileImage() {
    let fileInput = document.createElement('input')
    fileInput.type = "file"
    fileInput.accept = "image/png, image/jpeg"
    fileInput.onchange = function () {
        let files = fileInput.files;
        if (files && files.length > 0) {
            let toUpload = files[0];

            
            let resizeTo = 100
            const reader = new FileReader();

            reader.onload = function (event) {
                let image = new Image()
                image.onload = function () {
                    
                    let canvas = document.createElement("canvas");
                    canvas.width = resizeTo;
                    canvas.height = resizeTo;

                    
                    let ctx = canvas.getContext("2d");
                    ctx.fillStyle = "#fff";
                    ctx.fillRect(0, 0, resizeTo, resizeTo);
                    ctx.drawImage(image, -1, -1, resizeTo + 1, resizeTo + 1);

                    let imageUrl = canvas.toDataURL("image/png")

                    canvas.toBlob(async function (blob) {
                        if (blob.size <= 1024 * 100) {
                            

                            let confirmedPrompt = await showPrompt({
                                Header: "Change Image",
                                Content: "Change your profile image to the image below?",
                                ConfirmText: "Save",
                                CancelText: "Cancel",
                                Image: imageUrl,
                                ImageStyle: {
                                    width: '15rem',
                                    height: '15rem',
                                    borderRadius: '50%',
                                }
                            })

                            if (confirmedPrompt) {
                                firebase.storage().ref("avatars/" + uId).put(blob, {
                                    contentType: "image/png",
                                })
                                    .then((snapshot) => snapshot.ref.getDownloadURL())
                                    .then((url) => {
                                        db.ref('users/' + uId + '/avatar').set(url).then(() => {
                                            userData.avatar = url
                                            onUserSettingsChanged()
                                        })
                                    })
                            }
                        } else {
                            alert("Sorry, that image is too large!")
                        }
                    }, "image/png");
                }
                image.src = event.target.result
            };

            reader.readAsDataURL(toUpload);
        }
    }

    fileInput.click()
}


async function handleChangeEmailButton(skipAuthCheck) {
    let reAuthed = skipAuthCheck ||
        await handleResignIn()

    if (!reAuthed) { return } 

    let promptData = await showPrompt({
        Header: "Change Email",
        Content: "Enter the new email",
        ShowInput: 1,
        InputOptions: {
            id: "changeEmailInput",
            placeholder: "Enter a new email...",
            type: "email",
            autocomplete: "",
        },
        ConfirmText: "Change",
        CancelText: "Cancel",
    })

    if (!promptData) {
        return
    }

    let changedEmail = promptData[0]

    if (changedEmail && changedEmail.length > 0) {
        aUser.updateEmail(changedEmail).then(async () => {
            await showPrompt({
                Header: "Success",
                Content: "Your email was changed to " + changedEmail + "!",
                ConfirmText: "Awesome!"
            })

            window.location.reload()
        }).catch(async (error) => {
            let doRetry = await showPrompt({
                Header: "Error",
                Content: error.message + " Try again.",
                ConfirmText: "Retry",
                CancelText: "Cancel"
            })

            if (doRetry) {
                await handleChangeEmailButton(true)
            }
        })
    }
}

function isEmailValid(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email.match(regex)
}

function isPasswordValid(password) {
    if (password.length < 8) {
        return [false, "Password must be at least 8 characters long!"]
    }

    if (!password.match("[A-Z]")) {
        return [false, "Please use at least one capital letter!"]
    }

    if (!password.match("[^(A-Za-z)]")) {
        return [false, "Please use at least one special character or symbol!"]
    }

    return [true]
}

let accountSettingDebounces = { callN: 0 }
async function handleAccountSetting(name, confirmed, keyEvent) {
    if (name === 'username') {
        const usernameInput = document.getElementById('settingsUsernameInput')
        const warning = usernameInput.parentElement.parentElement.querySelector(".warning")
        let newName = usernameInput.value

        if (accountSettingDebounces[name] && accountSettingDebounces[name][0] === usernameInput.value && Date.now() - accountSettingDebounces[name][1] <= 100) {
            return
        }
        accountSettingDebounces[name] = [usernameInput.value, Date.now()]
        warning.style.display = 'none'

        if (newName !== userData.username) {
            let valid = isValidUsername(newName)

            if (valid[0]) {
                accountSettingDebounces.callN++;
                let thisN = accountSettingDebounces.callN;
                let taken = await awaitUsernameTaken(newName)
                if (thisN !== accountSettingDebounces.callN) {
                    return
                }

                valid = [!taken, "That username is taken, try a different one!"]
            }

            if (!valid[0]) {
                warning.style.display = 'grid'
                warning.querySelector('p').innerText = valid[1]
                return
            }

            if (!keyEvent || confirmed) {
                usernameInput.blur()
                usernameInput.value = userData.username
                let accepted = await showPrompt({
                    Header: "Change Username",
                    Content: "Are you sure you want to change your username?",
                    ConfirmText: "Change",
                    CancelText: "No, Cancel"
                })

                if (!accepted) { return }

                claimNewUsername(newName, true).then(async () => {
                    userData.username = newName
                    usernameInput.value = userData.username
                    await showPrompt({
                        Header: "Success",
                        Content: "Your username was updated!",
                        ConfirmText: "Awesome!"
                    })
                    handleNewUserSettings()
                }).catch(handleError)
            }
        }
    } else if (name === 'email') {
        const emailInput = document.getElementById('settingsEmailInput')
        const warning = emailInput.parentElement.parentElement.querySelector(".warning")
        let newEmail = emailInput.value

        if (accountSettingDebounces[name] && accountSettingDebounces[name][0] === emailInput.value && Date.now() - accountSettingDebounces[name][1] <= 100) {
            return
        }
        accountSettingDebounces[name] = [emailInput.value, Date.now()]
        warning.style.display = 'none'

        if (newEmail !== aUser.email) {
            let valid = isEmailValid(newEmail)

            if (!valid) {
                warning.style.display = 'grid'
                warning.querySelector('p').innerText = "Invalid email address!"
                return
            }

            if (!keyEvent || confirmed) {
                emailInput.blur()
                emailInput.value = aUser.email
                if (!confirmed) {
                    confirmed = await showPrompt({
                        Header: "Update Email",
                        Content: "Are you sure you want to update your email address?",
                        ConfirmText: "Update",
                        CancelText: "No, Cancel"
                    })
                }

                if (confirmed) {
                    let authed = await handleResignIn()

                    if (!authed) { return }

                    aUser.updateEmail(newEmail).then(async () => {
                        await showPrompt({
                            Header: "Success",
                            Content: "Your email was updated!",
                            ConfirmText: "Awesome!"
                        })
                        handleNewUserSettings()
                    }).catch(handleError)
                }
            }
        }
    } else if (name === 'password') {
        const passwordInput = document.getElementById('settingsPasswordInput')
        const warning = passwordInput.parentElement.parentElement.querySelector(".warning")
        let newPassword = passwordInput.value

        if (accountSettingDebounces[name] && accountSettingDebounces[name][0] === passwordInput.value && Date.now() - accountSettingDebounces[name][1] <= 100) {
            return
        }
        accountSettingDebounces[name] = [passwordInput.value, Date.now()]
        warning.style.display = 'none'

        if (newPassword !== '') {
            let data = isPasswordValid(newPassword)

            if (!data[0]) {
                warning.style.display = 'grid'
                warning.querySelector('p').innerText = data[1]
                return
            }

            if (!keyEvent || confirmed) {
                passwordInput.blur()
                passwordInput.value = ""
                if (!confirmed) {
                    confirmed = await showPrompt({
                        Header: "Change Password",
                        Content: "Are you sure you want to change your password?",
                        ConfirmText: "Change",
                        CancelText: "No, Cancel"
                    })
                }

                if (confirmed) {
                    let authed = await handleResignIn()

                    if (!authed) { return }

                    aUser.updatePassword(newPassword).then(async () => {
                        await showPrompt({
                            Header: "Success",
                            Content: "Your password was changed!",
                            ConfirmText: "Awesome!"
                        })
                        handleNewUserSettings()
                    }).catch(handleError)
                }
            }
        }
    }
}

function changeAccentColorSettingsButtonHandler(event) {
    let from = event.target;
    let id = parseInt(from.id.substring("settingsAccentColor".length))
    if (id || id === 0) {
        changeAccentColor(id)
    }
}

function changeAccentColor(newColor) {
    if (userSettings.color !== newColor) {
        userSettings.color = newColor;
        handleNewUserSettings();
    }

    const settingsAccentColorsDiv = document.getElementById('settingsAccentColorsDiv')

    let instant = false
    for (let i = 0; i < CONST_ACCENT_COLORS.length; i++) {
        const color = getAccentColor(i)
        
        let div = settingsAccentColorsDiv.querySelector("#settingsAccentColor" + i)

        if (!div) {
            div = document.createElement('div')
            div.id = "settingsAccentColor" + i
            settingsAccentColorsDiv.append(div)

            div.addEventListener("click", changeAccentColorSettingsButtonHandler)

            instant = true
        }

        div.style.setProperty("--color", getColorString(color))

        div.removeAttribute("selected")

        if (i === newColor) {
            
            div.setAttribute("selected", "true")

            
            for (let key in color) {
                animateRootCustomProperty("--base-accent-" + key, color[key], instant ? 0 : 250, function (stringValue) {
                    return parseInt(stringValue.replaceAll("%", ""))
                }, function (numericalValue) {
                    return numericalValue + ((key === "h") ? "" : "%")
                })
            }
        }
    }
}

function updateTimeFormatSetting(isTime, newValue) {
    const iterate = isTime ? document.getElementById('settingsTimeFormat') : document.getElementById('settingsDateFormat')
    for (const child of iterate.children) {
        if (child.getAttribute('refname') === newValue + "") {
            child.setAttribute('selected', 'true')
        } else {
            child.removeAttribute('selected')
        }
    }

    if (isTime) {
        if (userSettings.timeFormat === parseInt(newValue)) {
            return
        }
        userSettings.timeFormat = parseInt(newValue)
    } else {
        if (userSettings.dateFormat === parseInt(newValue)) {
            return
        }
        userSettings.dateFormat = parseInt(newValue)
    }

    handleNewUserSettings()
}

function customChangeZoomButtonHandler(isPlus) {
    if (isPlus) {
        changeZoomSettingsButtonHandler(true, 'c', (userSettings.zoom !== null && userSettings.zoom + 1) || 0)
    } else {
        changeZoomSettingsButtonHandler(true, 'c', (userSettings.zoom !== null && userSettings.zoom - 1) || 0)
    }
}

function getZoomPercent(number) {
    return CONST_ZOOM_SETTINGS[number + (Math.floor(CONST_ZOOM_SETTINGS.length / 2))]
}

function changeZoomSettingsButtonHandler(isButton, refName, number) {
    function switchMulti(rName) {
        const multi = document.querySelector("#settingsZoomDiv .fancyMultiChoice")
        for (const child of multi.children) {
            let thisRName = child.getAttribute('refname')
            if (thisRName === rName) {
                child.setAttribute('selected', 'true')
            } else {
                child.removeAttribute('selected')
            }
        }
    }

    const editCustomZoomSetting = document.getElementById('editCustomZoomSetting')
    const isCustom = refName === 'c'

    if (!isCustom) {
        if (isButton) {
            changeZoomSetting(refName)
        }
        switchMulti(refName)
        editCustomZoomSetting.style.opacity = 0;
        for (const item of editCustomZoomSetting.querySelectorAll('svg')) {
            item.style.cusor = 'default'
        }
    } else {
        if (!number) {
            number = 0
        }

        let percent = getZoomPercent(number)
        if (!percent) {
            if (number > (CONST_ZOOM_SETTINGS.length / 2)) {
                number--;
            } else {
                number++;
            }
            changeZoomSettingsButtonHandler(isButton, refName, number)
            return
        }

        if (isButton) {
            changeZoomSetting(number)
        }

        const settingsZoomText = document.getElementById('settingsZoomText')
        settingsZoomText.innerText = Math.floor((percent * 100) + 0.5) + "%"

        switchMulti('c')
        editCustomZoomSetting.style.opacity = 1;
        for (const item of editCustomZoomSetting.querySelectorAll('svg')) {
            item.style.cusor = 'pointer'
        }

        document.getElementById('settingsZoomText')
    }
}

function getSizeForZoomSetting(setting) {
    switch (setting) {
        case 's':
            return CONST_NORMAL_BASE_ZOOM * 0.85;
        case 'n':
            return CONST_NORMAL_BASE_ZOOM;
        case 'l':
            return CONST_NORMAL_BASE_ZOOM * 1.15;
        default:
            let percent = getZoomPercent(parseInt(setting));
            return CONST_NORMAL_BASE_ZOOM * percent;
    }
}

function executeForEachMatch(reg, targetText, handler) {
    let result;
    while ((result = reg.exec(targetText)) !== null) {
        handler(result)
    }
}

let neededUs = false
let neededSUs = false
function updateUUnits(baseSize) {
    
    if (!neededUs) {
        let uIndex = {}
        let sUIndex = {}

        const uReg = /var\(--(\d+)u\)/g
        const sUReg = /var\(--(\d+)su\)/g

        const sheets = document.styleSheets
        for (const sheetIndex in sheets) {
            const sheet = sheets[sheetIndex]
            const rules = sheet.cssRules || sheet.rules
            for (const ruleIndex in rules) {
                const rule = rules[ruleIndex]
                const text = rule.cssText
                executeForEachMatch(uReg, text, function (match) {
                    const num = match[1]
                    uIndex[num] = true
                })
                executeForEachMatch(sUReg, text, function (match) {
                    const num = match[1]
                    sUIndex[num] = true
                })
            }
        }

        neededUs = []
        for (const uUnit in uIndex) {
            neededUs.push(parseInt(uUnit))
        }

        neededSUs = []
        for (const sUUnit in sUIndex) {
            neededSUs.push(parseInt(sUUnit))
        }
    }

    
    for (const u of neededUs) {
        let unrounded = (baseSize * (u / 100))

        let rounded
        if (unrounded <= 1) {
            rounded = 1
        } else {
            rounded = Math.floor((unrounded * 2) + 0.5) / 2
        }

        document.body.parentElement.style.setProperty("--" + u + "u", rounded + 'px')
    }

    for (const sU of neededSUs) {
        let unrounded = (baseSize * (sU / 100))

        let rounded
        if (unrounded <= 1) {
            rounded = 1
        } else {
            rounded = Math.floor((unrounded * 2) + 0.5) / 2
        }

        let absoluteRounded = Math.floor(rounded)

        document.body.parentElement.style.setProperty("--" + sU + "su", absoluteRounded + 'px')
    }

    
    computeAllDropdowns()
}

function changeZoomSetting(newZoom) {
    let numSize = getSizeForZoomSetting(newZoom)
    let size = numSize + "px"
    let html = document.body.parentElement
    html.style.setProperty("font-size", size, "important")

    updateUUnits(numSize)

    if (userSettings.zoom !== newZoom) {
        userSettings.zoom = newZoom;
        handleNewUserSettings();
    }

    let num = parseInt(userSettings.zoom)
    if (isNaN(num)) {
        changeZoomSettingsButtonHandler(false, userSettings.zoom)
    } else {
        changeZoomSettingsButtonHandler(false, 'c', num)
    }
}

function settingsButton(instant) {
    showPage('settings', instant)
    updatePath("/settings")
}

async function confirmSecureAction(data) {
    if (data.Type === "Delete") {
        const namespace = data.Namespace
        const name = data.Name

        const skipReAuth = !getPreference('securityCheck')

        const authed = skipReAuth || await handleResignIn()

        if (authed) {
            return await showPrompt({
                Header: "Confirm Deletion",
                Content: `This action cannot be undone. You are about to delete the ${namespace.toLowerCase()} '${name}' forever.\n\nPlease type '${name}' to confirm.`,
                ConfirmText: "Delete",
                ShowInput: 1,
                InputOptions: {
                    placeholder: name,
                },
                ValidateInput: function (text) {
                    return text === name
                },
                CancelText: "Cancel",
            })
        }

    }
}

async function handleClearStorageButton() {
    const result = await showPrompt({
        Header: "Clear Storage",
        Content: "You are about to clear all locally stored data. Due to the side affects of this, the application must be reloaded after. Proceed?",
        ConfirmText: "Proceed",
        CancelText: "Cancel",
    })

    if (result) {
        clearLocalData()
        window.location.reload()
    }
}

function getProjectData(projectId) {
    return loadedProjects[projectId]
}

function getSelectedProjectData() {
    return getProjectData(currentSelectedProject)
}

function getSpaceData(projectId, spaceId) {
    const projectData = getProjectData(projectId)
    return projectData && projectData.spaces && projectData.spaces[spaceId]
}

function getSelectedSpaceData() {
    return getSpaceData(currentSelectedProject, currentSelectedSpace)
}

function getViewData(projectId, spaceId, viewId) {
    const spaceData = getSpaceData(projectId, spaceId)
    return spaceData && spaceData.views && spaceData.views[viewId]

}

function getSelectedViewData() {
    return getViewData(currentSelectedProject, currentSelectedSpace, currentSelectedView)
}

async function handleOpenStatusSettings(projectId, spaceId) {
    const projectStatusSettingsContainer = document.getElementById('projectStatusSettingsContainer')
    const projectStatusSettings = document.getElementById('projectStatusSettings')
    const projectStatusesContainer = document.getElementById('projectStatusesContainer')

    const projectData = getProjectData(projectId)
    let realStatuses = projectData.statuses

    let numChanges = -1;
    
    let currentStatuses = {}
    for (const key in realStatuses) {
        currentStatuses[key] = realStatuses[key]
    }

    function orderStatuses(input) {
        let numerical = []

        for (const key in input) {
            let num = parseInt(key)
            if (!isNaN(num)) {
                numerical[num] = input[key]
            }
        }

        let ordered = {}
        let i = 0;
        for (const key in numerical) {
            ordered[i] = numerical[key]
            i++;
        }

        ordered.start = input.start;
        ordered.finish = input.finish;
        return ordered
    }

    function makeContainerFromStatuses(statuses, selectStatus) {
        statuses = orderStatuses(statuses)
        numChanges++;

        currentStatuses = statuses
        projectStatusesContainer.innerHTML = ''

        function createNew() {
            let max = 0;
            for (const key in currentStatuses) {
                const newMax = currentStatuses[key].id
                if (newMax > max) {
                    max = newMax
                }
            }
            statuses[toList.length] = {
                name: "",
                color: CONST_STATUS_DEFAULT_COLOR,
                id: max + 1,
            }
            makeContainerFromStatuses(statuses, toList.length)
        }

        function makeDiv(status, isCopy, removeDrag) {
            let div = document.createElement('div')
            div.className = 'projectStatusSetting'
            div.style.setProperty('--status-color', getColorString(CONST_ALL_COLORS[status.color]))

            let grabber = createSvg("grabber")
            grabber.setAttribute('class', 'projectStatusSettingGrabber')
            grabber.setAttribute('draggable', 'false')

            if (!isCopy && !removeDrag) {
                function updateOffset(event) {
                    if (!isDown) { return }
                    let root = projectStatusesContainer.getBoundingClientRect()
                    copy.style.left = `0px`
                    copy.style.top = `${event.clientY - (copy.clientHeight * 0.5) - root.y}px`

                    let metSelf = false;
                    for (const element of projectStatusesContainer.children) {
                        if (element === div) {
                            metSelf = true;
                        } else if (element.tagName === "DIV" && !element.getAttribute('removeDrag')) {
                            let bounds = element.getBoundingClientRect()
                            if (event.clientY >= bounds.top && event.clientY <= bounds.top + bounds.height) {
                                projectStatusesContainer.removeChild(div)
                                projectStatusesContainer.insertBefore(div, (metSelf) ? (element.nextSibling) : (element))
                            }
                        }
                    }
                }

                let copy
                let isDown = false;
                grabber.onmousedown = function () {
                    if (div.querySelector("input")) { return }
                    copy = makeDiv(status, true)
                    copy.style.opacity = 0.5;
                    div.style.opacity = 0.75;
                    isDown = true;

                    let root = projectStatusesContainer.getBoundingClientRect()
                    let pos = div.getBoundingClientRect()
                    copy.style.position = 'absolute'
                    copy.style.left = `calc(${pos.x - root.x}px)`
                    copy.style.top = `calc(${pos.y - root.y}px)`
                    copy.style.margin = "0";
                    copy.style.width = `calc(${pos.width}px - 0.125rem)`
                    projectStatusesContainer.append(copy)

                    document.addEventListener('mousemove', updateOffset)
                    document.addEventListener('mouseup', removeCopy)

                    let removed
                    function removeCopy() {
                        if (removed) { return }
                        removed = true;

                        div.style.opacity = 1;
                        isDown = false;
                        projectStatusesContainer.removeChild(copy)
                        document.removeEventListener('mousemove', updateOffset)
                        document.removeEventListener('mouseup', removeCopy)

                        
                        let ordered = []
                        for (const child of projectStatusesContainer.children) {
                            let s = child.getAttribute('status')
                            if (s) {
                                ordered.push(s)
                            }
                        }

                        const newStatuses = {}
                        newStatuses.start = statuses.start;
                        newStatuses.finish = statuses.finish;

                        for (const key in ordered) {
                            newStatuses[key] = statuses[ordered[key]]
                        }

                        makeContainerFromStatuses(newStatuses)
                    }
                }
            } else if (removeDrag) {
                grabber.style.visibility = "hidden";
                grabber.style.cursor = 'default'
                div.setAttribute('removeDrag', 'true')
            } else if (isCopy) {
                div.setAttribute('removeDrag', 'true')
            }

            let icon = document.createElement('div')
            icon.className = 'projectStatusSettingIcon'

            bindClick(icon, function (event) {
                showChangeColorMenu(icon, function (newColor) {
                    status.color = newColor
                    makeContainerFromStatuses(statuses)
                })
            })

            function handleRename() {
                save.disabled = true;
                p.onclick = null
                p.style.color = "var(--item-bg)"

                setSvgSource(settings, "check")

                let input = document.createElement('input')
                input.className = "projectStatusSettingNameInput"
                input.value = p.innerText
                p.innerText = "_"
                input.maxLength = getMaxStringLengthFor('status');
                input.placeholder = "Enter a name..."
                p.append(input)

                input.focus()
                input.setSelectionRange(0, input.value.length)

                const fullHeight = document.body.getBoundingClientRect().height
                const pos = input.getBoundingClientRect().top
                if (pos > fullHeight * 0.5) {
                    projectStatusSettingsContainer.scrollTo(0, projectStatusSettingsContainer.scrollTop + (pos - fullHeight * 0.5))
                }

                function finalize(wasEnter) {
                    let wasChanged = status.name !== input.value;
                    let isSelected = div.getAttribute('selected') === 'true'
                    let saveChanges = false;
                    if (!wasChanged) {
                        if (isSelected) {
                            handleDelete()
                        } else {
                            saveChanges = true;
                        }
                    }

                    if (saveChanges || wasChanged) {
                        if (input.value.length > 0) {
                            status.name = input.value;
                            makeContainerFromStatuses(statuses)

                            if (wasEnter && isSelected) {
                                createNew()
                            }
                        } else if (!isSelected) {
                            handleDelete()
                        }
                    }

                    save.disabled = false;
                }

                let debounce = Date.now()
                input.onblur = function (event) {
                    if (Date.now() - debounce >= 50) {
                        debounce = Date.now()
                        finalize()
                    }
                }
                input.onkeydown = function (event) {
                    if (event.key === "Enter" || event.key === "Escape") {
                        if (Date.now() - debounce >= 50) {
                            debounce = Date.now()
                            finalize(event.key === "Enter")
                        }
                    }
                }
            }

            function handleDelete() {
                delete statuses[parseInt(div.getAttribute('status'))]
                makeContainerFromStatuses(statuses)
            }

            let p = document.createElement('p')
            p.innerText = status.name
            bindClick(p, handleRename)

            let settings = createSvg('options')
            settings.setAttribute('class', 'projectStatusSettingSettings')

            function configStatusMenu(event) {
                let items = [
                    {
                        Icon: svg("pencil"),
                        Text: "Rename",
                        Handler: function (source) {
                            closeMenu()
                            handleRename()
                        }
                    },
                    {
                        Icon: svg("colorPalette"),
                        Text: "Change Color",
                        Handler: function (source) {
                            showChangeColorMenu(source, function (newColor) {
                                status.color = newColor
                                makeContainerFromStatuses(statuses)
                            })
                        }
                    },
                ]

                if (div.getAttribute('status')) {
                    items.push({
                        Icon: svg("delete"),
                        IconColor: getColorString(CONST_DELETE_COLOR, true),
                        Text: "Delete",
                        Handler: function (source) {
                            closeMenu()
                            handleDelete()
                        }
                    })
                }

                showMenu({
                    Header: "Configure Status",
                    Source: settings,
                    Items: items
                })

            }

            bindClick(settings, configStatusMenu)
            bindRightClick(div, configStatusMenu)

            div.append(grabber, icon, p, settings)

            return div
        }

        let toList = []
        for (const key in currentStatuses) {
            const status = currentStatuses[key]

            let num = parseInt(key)
            if (!isNaN(num)) {
                toList[num] = status
            }
        }

        function makeHeader(text) {
            let header = document.createElement('div')
            header.className = "projectStatusSettingHeader"
            header.setAttribute('removeDrag', 'true')

            let p = document.createElement('p')
            p.innerText = text
            header.append(p)

            return header
        }
        function makeButton(text, icon, handler) {
            let button = document.createElement('div')
            button.className = "projectStatusSettingsButton"

            let img = createSvg(icon)

            let p = document.createElement('p')
            p.innerText = text

            bindClick(button, function (event) {
                makeRipple(button, event)
                handler(event)
            })
            button.append(img, p)
            return button
        }


        projectStatusesContainer.append(makeHeader("Initial Status"))
        projectStatusesContainer.append(makeDiv(currentStatuses.start, false, true))

        projectStatusesContainer.append(makeHeader("Active Statuses"))
        for (let i = 0; i < toList.length; i++) {
            const status = toList[i]
            let div = makeDiv(status, false, false)
            div.setAttribute('status', i)
            projectStatusesContainer.append(div)

            if (selectStatus != null) {
                if (i === selectStatus) {
                    div.setAttribute('selected', 'true')
                    div.querySelector('p').click()
                }
            }
        }

        let create = makeButton("Add Status", svg("add"), createNew)
        create.setAttribute('removeDrag', 'true')
        if (toList.length === 0) {
            create.style.marginTop = "0.5rem"
        }

        projectStatusesContainer.append(create)

        projectStatusesContainer.append(makeHeader("Closed"))
        projectStatusesContainer.append(makeDiv(currentStatuses.finish, false, true))
    }

    function handleClose() {
        projectStatusSettingsContainer.animate([
            CONST_STATUS_SETTINGS_ANIMATION.Base.In,
            CONST_STATUS_SETTINGS_ANIMATION.Base.Out,
        ], processAnimationOptions(CONST_STATUS_SETTINGS_ANIMATION.Options)).onfinish = function () {
            projectStatusSettingsContainer.style.display = 'none'
        }
        projectStatusSettings.animate([
            CONST_STATUS_SETTINGS_ANIMATION.In,
            CONST_STATUS_SETTINGS_ANIMATION.Out,
        ], processAnimationOptions(CONST_STATUS_SETTINGS_ANIMATION.Options))
    }

    const header = projectStatusSettingsContainer.querySelector('p')
    header.innerText = `Edit statuses for ${projectData.name}`

    const save = document.getElementById('projectStatusesSaveSettingsButton')
    save.innerText = "Save Settings"
    bindClick(save, function (event) {
        save.innerText = "Saving..."
        save.disabled = true;
        db.ref('projects/' + projectId + '/statuses').set(currentStatuses).then(() => {
            save.disabled = false;
            handleClose()
        }).catch((error) => {
            save.disabled = false;
            save.innerText = "Retry Saving Settings"
            handleError(error)
        })
    })

    const close = document.getElementById('projectStatusSettingsClose')
    bindClick(close, async function (event) {
        if (numChanges > 0) {
            let response = await showPrompt({
                Header: "Warning",
                Content: "Closing this menu will revert the changes you have made. Proceed?",
                ConfirmText: "Revert Changes",
                CancelText: "Cancel",
            })

            if (response) {
                handleClose()
            }
        } else {
            handleClose()
        }
    })

    makeContainerFromStatuses(currentStatuses)
    projectStatusSettingsContainer.style.display = 'block'
    projectStatusSettingsContainer.animate([
        CONST_STATUS_SETTINGS_ANIMATION.Base.Out,
        CONST_STATUS_SETTINGS_ANIMATION.Base.In,
    ], processAnimationOptions(CONST_STATUS_SETTINGS_ANIMATION.Options))
    projectStatusSettings.animate([
        CONST_STATUS_SETTINGS_ANIMATION.Out,
        CONST_STATUS_SETTINGS_ANIMATION.In,
    ], processAnimationOptions(CONST_STATUS_SETTINGS_ANIMATION.Options))
}

async function handleOpenShareSettings(projectId, spaceId) {
    const baseProjectShareContainer = document.getElementById('baseProjectShareContainer')
    const projectShare = document.getElementById('projectShare')
    const projectShareContainer = document.getElementById('projectShareContainer')

    const projectData = getProjectData(projectId)
    let realShares = projectData.access

    
    let currentShares = {}
    for (const key in realShares) {
        currentShares[key] = realShares[key]
    }

    function makeButton(text, icon, handler) {
        let button = document.createElement('div')
        button.className = "projectStatusSettingsButton projectShareButton"

        let img = createSvg(icon)

        let p = document.createElement('p')
        p.innerText = text

        bindClick(button, function (event) {
            makeRipple(button, event)
            handler(event)
        })
        button.append(img, p)
        return button
    }

    let numChanges = -1;
    projectShareContainer.innerHTML = ''
    function updateContents(shares) {
        numChanges++;
        projectShareContainer.innerHTML = ''

        function makeDiv(id, level) {
            let div = document.createElement('div')
            div.className = "projectShareItem"

            let img = document.createElement('img')
            handleAvatarForUser(id, function (src) {
                img.src = src;
            })

            let p = document.createElement('p')
            if (id === uId) {
                p.innerText = "You"
            } else {
                handleUsernameForUser(id, function (name) {
                    p.innerText = name;
                })
            }

            let p2 = document.createElement('p2')
            p2.innerText = CONST_SHARE_PROJECT_DATA[level].name;

            let img2 = createSvg('options')

            if (level === 5) {
                img2.style.display = 'none';
                p2.style.cursor = 'default';
                img2.style.cursor = 'default';
            } else {
                function openChangeAccessMenu(source, openLeft) {
                    let items = []

                    items.push({
                        Icon: svg('close'),
                        IconColor: getColorString(CONST_DELETE_COLOR, true),
                        Text: "Remove Access",
                        Handler: function (source) {
                            closeMenu()
                            delete shares[id]
                            updateContents(shares)
                        }
                    })

                    for (let i = 1; i <= 4; i++) {
                        let data = CONST_SHARE_PROJECT_DATA[i]
                        items.push({
                            Text: data.fullName || data.name,
                            Description: data.description,
                            Handler: function (source) {
                                closeMenu()
                                shares[id] = i
                                updateContents(shares)
                            }
                        })
                    }

                    showMenu({
                        Header: "Change Access",
                        Source: source,
                        OpenLeft: !!openLeft,
                        Items: items,
                    })
                }

                function open(event) {
                    openChangeAccessMenu(img2)

                }

                bindClick(p2, open)
                bindClick(img2, open)
                bindRightClick(div, open)
                bindDoubleClick(div, open)
            }

            div.append(img, p, p2, img2)
            return div
        }

        for (const key in shares) {
            projectShareContainer.append(makeDiv(key, shares[key]))
        }
    }

    const header = projectShare.querySelector('p')
    header.innerText = `Share ${projectData.name}`

    let existingAdd = document.getElementById('projectShareAddUser')
    if (existingAdd) {
        projectShare.removeChild(existingAdd)
    }

    function makeAdd(parent, before) {
        let div = document.createElement('div')
        div.className = "projectShareInput"
        div.style.display = 'none'

        let img = createSvg('user')

        let input = document.createElement('input')
        input.placeholder = "Enter username..."
        input.maxLength = getMaxStringLengthFor('user');

        let plus = createSvg('add')

        div.append(img, input, plus)
        parent.insertBefore(div, before)

        let animating = false;
        let add = makeButton("Add User", svg('add'), function (event) {
            save.disabled = true;
            if (animating) { return }

            let root = projectShare.getBoundingClientRect()
            let bounds = add.getBoundingClientRect()
            add.style.position = 'absolute'
            add.style.left = `${bounds.left - root.left}px`
            add.style.top = `${bounds.top - root.top}px`

            const start = { opacity: 1, transform: 'scale(1)' }
            const finish = { opacity: 0, transform: 'scale(0.5)' }
            const options = { duration: 150, fill: 'forwards' }

            div.style.display = 'block'
            animating = true;
            add.animate([start, finish], options)
            div.animate([finish, start], options).onfinish = function () {
                add.style.display = 'none'
                animating = false;
            }

            input.value = ''
            input.focus()

            function abort() {
                if (animating) {
                    requestAnimationFrame(abort)
                    return
                }
                input.onblur = null
                animating = true;
                add.style.display = 'grid'
                add.animate([finish, start], options)
                div.animate([start, finish], options).onfinish = function () {
                    div.style.display = 'none'
                    add.style.position = 'static'
                    animating = false;
                    running = false;
                }
                save.disabled = false;
            }

            let running
            let last = 0;
            async function testValid() {
                if (Date.now() - last < 500) {
                    return
                }
                last = Date.now()

                if (running) { return }
                running = true;

                let username = input.value;
                if (username.length <= 0) {
                    abort()
                } else {
                    let method = input.onblur
                    input.onblur = null

                    input.blur()

                    let snapshot = await db.ref('usernames/' + username.toLowerCase()).get()
                    let value = snapshot.val()
                    if (value) {
                        if (currentShares[value]) {
                            await showPrompt({
                                Header: "Already Added",
                                Content: `That user is already added!`,
                                ConfirmText: "Try Again",
                            })

                            input.onblur = method
                            input.focus()
                        } else {
                            abort()
                            currentShares[value] = 1;

                            function resolve() {
                                if (animating) {
                                    requestAnimationFrame(resolve)
                                } else {
                                    updateContents(currentShares)
                                }
                            }

                            requestAnimationFrame(resolve)
                        }
                    } else {
                        await showPrompt({
                            Header: "No User",
                            Content: `Couldn't find the user '${username}', make sure it is spelled correctly.`,
                            ConfirmText: "Try Again",
                        })

                        input.onblur = method
                        input.focus()
                    }
                    running = false;
                }
            }

            input.onkeypress = function (event) {
                if (event.key === "Enter") {
                    requestAnimationFrame(testValid)
                }
            }
            plus.onmousedown = testValid

            input.onblur = function (event) {
                requestAnimationFrame(function () {
                    if (!running) {
                        abort()
                    }
                })
            }
        })

        add.id = "projectShareAddUser"

        parent.insertBefore(add, before)
    }

    const save = document.getElementById('projectShareSave')
    save.innerText = "Save"

    makeAdd(projectShare, save)

    function handleClose() {
        baseProjectShareContainer.animate([
            CONST_SHARE_ANIMATION.Base.In,
            CONST_SHARE_ANIMATION.Base.Out,
        ], processAnimationOptions(CONST_SHARE_ANIMATION.Options))
        projectShare.animate([
            CONST_SHARE_ANIMATION.In,
            CONST_SHARE_ANIMATION.Out,
        ], processAnimationOptions(CONST_SHARE_ANIMATION.Options)).onfinish = function () {
            baseProjectShareContainer.style.display = 'none'
        }
    }

    bindClick(save, function (event) {
        save.innerText = "Saving..."
        save.disabled = true;

        let updates = {
            ['projects/' + projectId + '/access']: currentShares,
        }

        for (let id in currentShares) {
            updates['users/' + id + '/access/' + projectId] = currentShares[id]
        }

        for (let id in realShares) {
            if (!currentShares[id]) {
                updates['users/' + id + '/access/' + projectId] = null
            }
        }

        db.ref().update(updates).then(() => {
            save.disabled = false;
            handleClose()
        }).catch((error) => {
            save.disabled = false;
            save.innerText = "Retry Saving"
            handleError(error)
        })
    })

    const close = document.getElementById('projectShareClose')
    bindClick(close, async function () {
        if (numChanges > 0) {
            let response = await showPrompt({
                Header: "Warning",
                Content: "Closing this menu will revert the changes you have made. Proceed?",
                ConfirmText: "Revert Changes",
                CancelText: "Cancel",
            })

            if (response) {
                handleClose()
            }
        } else {
            handleClose()
        }
    })

    updateContents(currentShares)

    baseProjectShareContainer.style.display = 'block'
    baseProjectShareContainer.animate([
        CONST_SHARE_ANIMATION.Base.Out,
        CONST_SHARE_ANIMATION.Base.In,
    ], processAnimationOptions(CONST_SHARE_ANIMATION.Options))
    projectShare.animate([
        CONST_SHARE_ANIMATION.Out,
        CONST_SHARE_ANIMATION.In,
    ], processAnimationOptions(CONST_SHARE_ANIMATION.Options))

}

function showChangeColorMenu(source, handler) {
    let Items = []

    for (let i in CONST_ALL_COLORS) {
        const color = CONST_ALL_COLORS[i]
        Items.push({
            Text: color.name,
            CircleIcon: true,
            IconColor: getColorString(color),
            OnlyShowHeaderIcon: true,
            Handler: function (source) {
                closeMenu()
                handler(parseInt(i))
            }
        })
    }

    showMenu({
        Header: "Change Color",
        Source: source,
        OpenLeft: source.className === "dropdownItem",
        HeaderIconRows: 6,
        Items: Items,
    })
}

async function handleCreateProjectPrompt() {
    const placeholder = "Epic Project"
    let data = await showPrompt({
        Header: "Create Project",
        Content: "Pick a Cool Name:",
        ShowInput: 1,
        InputOptions: {
            placeholder: placeholder,
            minlength: 5,
            maxlength: getMaxStringLengthFor('project'),
        },
        ConfirmText: "Create",
        CancelText: "Cancel",
    })

    if (!data) {
        return
    }

    let name = data[0]

    if (name.length === 0) {
        name = placeholder
    }

    if (name.length < 3) {
        let tryAgain = await showPrompt({
            Header: "Error",
            Content: "Project names must be at least 3 characters long!",
            ConfirmText: "Try Again",
            CancelText: "Cancel",
        })

        if (tryAgain) {
            await handleCreateProjectPrompt()
        }

        return
    }

    let key = generatePushID()
    let newProjectRef = db.ref("projects/" + key)

    let newProjectData = {
        name: name,
        creator: uId,
        statuses: CONST_DEFAULT_STATUSES,
        access: {
            [uId]: 5,
        }
    }

    
    newProjectRef.set(newProjectData).then(() => {
        
        db.ref('/users/' + uId + '/access/' + key).set(5).then(() => {
            
        }).catch((error) => {
            handleError(error)
        })
    }).catch((error) => {
        handleError(error)
    })
}

async function handleCreateProjectButton(button) {
    showMenu({
        Header: "Create Project",
        Source: button,
        Items: [
            {
                Text: "From Scratch",
                Icon: svg("add"),
                Handler: function (source) {
                    closeMenu()
                    handleCreateProjectPrompt()
                },
            },
            
            
            
            
            
            
            
            
        ]
    })
}

function handleProjectSettingsButton(id, source, openLeft) {
    const projectData = getProjectData(id)
    const permissions = getPermissions(id)

    const possible = {
        EditStatuses: {
            Icon: svg("status"),
            Text: "Edit Project Statuses",
            
            Handler: async function (source) {
                closeMenu()
                handleOpenStatusSettings(id, false)
            },
        },
        Share: {
            Icon: svg("share"),
            Text: "Sharing & Permissions",
            
            Handler: async function (source) {
                closeMenu()
                handleOpenShareSettings(id, false)
            },
        },
        CreateSpaces: {
            Icon: svg("add"),
            Text: "Create Space",
            Handler: function () {
                closeMenu()
                handleCreateSpaceButton(id, source.parentElement.querySelector(".projectDropdownAdd"))
            },
            ShowHeaderIcon: true,
        },
        ChangeName: {
            Icon: svg("pencil"),
            Text: "Rename",
            ShowHeaderIcon: true,
            Handler: async function (source) {
                closeMenu()
                handleRename({
                    namespace: 'project',
                    projectId: id,
                })
            },
        },
        Delete: {
            Icon: svg("delete"),
            IconColor: getColorString(CONST_DELETE_COLOR, true),
            Text: "Delete",
            Handler: async function () {
                closeMenu()
                const name = projectData.name
                const confirmed = await confirmSecureAction({
                    Type: "Delete",
                    Namespace: "Project",
                    Name: name,
                })

                if (confirmed) {
                    let toUpdate = {
                        ['taskData/' + id]: null,
                        ['projects/' + id]: null,
                    }

                    for (const key in projectData.access) {
                        toUpdate['users/' + key + '/access/' + id] = null
                    }

                    db.ref().update(toUpdate).then(() => {
                        showPrompt({
                            Header: "Project Deleted",
                            Content: `The project '${name}' has been deleted.`,
                            ConfirmText: "Okay",
                        })
                    }).catch((error) => {
                        handleError(error)
                    })
                }
            },
            ShowHeaderIcon: true,
        },
    }

    let items = []

    for (const name in possible) {
        if (permissions[name]) {
            items.push(possible[name])
        }
    }

    if (items.length <= 3) {
        for (const item of items) {
            item.ShowHeaderIcon = false;
        }
    }

    showMenu({
        Header: "Project Options",
        Source: source,
        OpenLeft: openLeft,
        Items: items,
    })
}

async function handleCreateSpacePrompt(id) {
    const placeholder = "Awesome Space"
    let data = await showPrompt({
        Header: "Create Space",
        Content: "Choose a Great Name:",
        ShowInput: 1,
        InputOptions: {
            placeholder: placeholder,
            minlength: 3,
            maxlength: getMaxStringLengthFor('space'),
        },
        ConfirmText: "Create",
        CancelText: "Cancel",
    })

    if (!data) {
        return
    }

    let name = data[0]

    if (name.length === 0) {
        name = placeholder
    }

    if (name.length < 3) {
        let tryAgain = await showPrompt({
            Header: "Error",
            Content: "Space names must be at least 3 characters long!",
            ConfirmText: "Try Again",
            CancelText: "Cancel",
        })

        if (tryAgain) {
            await handleCreateSpacePrompt(id)
        }

        return
    }

    let key = generatePushID()
    let newSpaceRef = db.ref("projects/" + id + "/spaces/" + key)

    let newSpaceData = {
        name: name,
        creator: uId,
    }

    
    newSpaceRef.set(newSpaceData).then(() => {

    }).catch((error) => {
        handleError(error)
    })
}

function handleCreateSpaceButton(id, button, openOn) {
    showMenu({
        Header: "Create Space",
        Source: button,
        OpenOn: openOn,
        Items: [
            {
                Text: "From Scratch",
                Icon: svg("add"),
                Handler: function (source) {
                    closeMenu()
                    handleCreateSpacePrompt(id)
                },
            },
            
            
            
            
            
            
            
            
        ]
    })
}

function handleSpaceColorButton(projectId, spaceId, source) {
    showChangeColorMenu(source, function (newColor) {
        db.ref('projects/' + projectId + '/spaces/' + spaceId + '/color').set(newColor).then(() => {

        }).catch(handleError)
    })
}

function handleSpaceSettingsButton(projectId, spaceId, source, openLeft) {
    const spaceData = getSpaceData(projectId, spaceId)
    const permissions = getPermissions(projectId, spaceId)
    const possible = {
        ChangeName: {
            Icon: svg("pencil"),
            Text: "Rename",
            ShowHeaderIcon: false,
            Handler: async function (source) {
                closeMenu()
                handleRename({
                    namespace: 'space',
                    projectId: projectId,
                    spaceId: spaceId,
                })
            },
        },
        ChangeColor: {
            Icon: svg("colorPalette"),
            Text: "Change Color",
            ShowHeaderIcon: false,
            Handler: function (secondSource) {
                closeMenu()
                const icon = source.parentElement.parentElement.querySelector('.projectDropdownSpaceIcon') || source.parentElement.querySelector('div')
                handleSpaceColorButton(projectId, spaceId, icon)
            },
        },
        Delete: {
            Icon: svg("delete"),
            IconColor: getColorString(CONST_DELETE_COLOR, true),
            Text: "Delete",
            Handler: async function () {
                closeMenu()
                const name = spaceData.name
                const confirmed = await confirmSecureAction({
                    Type: "Delete",
                    Namespace: "Space",
                    Name: name,
                })

                if (confirmed) {
                    db.ref().update({
                        ['taskData/' + projectId + '/' + spaceId]: null,
                        ['projects/' + projectId + '/spaces/' + spaceId]: null,
                    }).then(() => {
                        showPrompt({
                            Header: "Space Deleted",
                            Content: `The space '${name}' has been deleted.`,
                            ConfirmText: "Okay",
                        })
                    }).catch((error) => {
                        handleError(error)
                    })
                }
            },
            ShowHeaderIcon: false,
        }
    }
    let items = []
    for (const name in possible) {
        if (permissions[name]) {
            items.push(possible[name])
        }
    }

    showMenu({
        Header: "Space Options",
        Source: source,
        OpenLeft: openLeft,
        Items: items,
    })
}

function removeDropdownSpace(projectId, spaceId) {
    updateDropdownSpace(projectId, spaceId, true)
}

function updateDropdownSpace(projectId, spaceId, isRemoving) {

    let dropdown = loadedProjectsDiv.querySelector("#projectDropdown_" + projectId)
    let existing = dropdown.querySelector("#projectDropdownSpace_" + spaceId)

    if (isRemoving) {
        if (existing) {
            dropdown.removeChild(existing)
        }
        return
    }

    const spaceData = getSpaceData(projectId, spaceId)

    if (!existing) {
        let space = document.createElement('button')
        space.className = "projectDropdownSpace sidebarSelectable"
        space.id = "projectDropdownSpace_" + spaceId

        let background = document.createElement('div')

        let icon = document.createElement("div")
        icon.className = "projectDropdownSpaceIcon"

        let iconDiv = document.createElement("div")
        iconDiv.className = "projectDropdownSpaceIconDiv"
        icon.append(iconDiv)

        let text = document.createElement('p')

        let optionsDiv = document.createElement('div')
        optionsDiv.setAttribute('class', 'projectDropdownSpaceOptionsDiv')
        optionsDiv.setAttribute('continuehasmenu', 'true')

        let options = createSvg('options')
        options.setAttribute('class', 'projectDropdownButton')

        let count = document.createElement('p2')
        count.setAttribute('class', 'projectDropdownSpaceCount')

        optionsDiv.append(options, count)

        space.append(background, icon, text, optionsDiv)
        dropdown.append(space)


        function inSettingsBounds(event) {
            if (event && options.style.display !== 'none') {
                let boundingBox = options.getBoundingClientRect()
                return event.clientX >= boundingBox.x && event.clientX <= boundingBox.x + boundingBox.width
            }
        }
        function inIconBounds(event) {
            if (event && options.style.display !== 'none') {
                let boundingBox = icon.getBoundingClientRect()
                return event.clientX >= boundingBox.x && event.clientX <= boundingBox.x + boundingBox.width
            }
        }

        bindClick(space, function (event) {
            if (inSettingsBounds(event)) {
                makeRipple(space, event)
                handleSpaceSettingsButton(projectId, spaceId, options)
            } else if (inIconBounds(event)) {
                makeRipple(space, event)
                handleSpaceColorButton(projectId, spaceId, icon)
            } else if (!space.querySelector(".inlineRenameInput")) {
                makeRipple(space, event)
                selectProjectSpace(projectId, spaceId)
            }
        })

        bindRightClick(space, function (event) {
            if (options.style.display !== 'none') {
                handleSpaceSettingsButton(projectId, spaceId, options)
                makeRipple(space, event)
            }
        })

        existing = space
    }

    existing.querySelector("p").innerText = spaceData.name
    const color = (spaceData.color != null && CONST_ALL_COLORS[spaceData.color]) || getAccentColor(2)
    existing.querySelector(".projectDropdownSpaceIcon").style.setProperty("--icon-color", getColorString(color))
    existing.querySelector(".projectDropdownSpaceCount").innerText = spaceData.count || ''

    const permissions = getPermissions(projectId)
    const hasOptions = permissions.HasOptions

    if (hasOptions) {
        existing.querySelector(".projectDropdownButton").style.display = "block"
        existing.querySelector(".projectDropdownSpaceOptionsDiv").style.removeProperty('--default-opacity')
    } else {
        existing.querySelector(".projectDropdownButton").style.display = "none"
        existing.querySelector(".projectDropdownSpaceOptionsDiv").style.setProperty('--default-opacity', '0')
    }

    if (currentSelectedProject === projectId && currentSelectedSpace === spaceId) {
        updateProjectHeaderDisplay(projectId, spaceId)
    }
}

function createDropdown(id, isMain) {
    let dropdown = document.createElement("div")
    dropdown.className = "projectDropdown"
    dropdown.setAttribute('dropdownid', id)

    let content = document.createElement('div')
    content.className = "projectDropdownContent"

    let collapse = createSvg("dropdownCollapse")
    collapse.setAttribute('class', 'projectDropdownCollapse')

    let text = document.createElement("button")
    if (isMain) {
        text.innerText = id
    }


    let options = createSvg("options")
    options.setAttribute('class', 'projectDropdownSettings projectDropdownButton')

    let add = createSvg("add")
    add.setAttribute('class', 'projectDropdownAdd projectDropdownButton')

    function inAddBounds(event) {
        if (event && add.style.display !== 'none') {
            let boundingBox = add.getBoundingClientRect()
            return event.clientX >= boundingBox.x && event.clientX <= boundingBox.x + boundingBox.width
        }
    }

    function inOptionsBounds(event) {
        if (event && options.style.display !== 'none') {
            let boundingBox = options.getBoundingClientRect()
            return event.clientX >= boundingBox.x && event.clientX <= boundingBox.x + boundingBox.width
        }
    }

    function hoverHandler(event) {
        if (inAddBounds(event) || inOptionsBounds(event)) {
            content.setAttribute("somethingHovered", "true")
        } else {
            content.removeAttribute("somethingHovered")
        }
    }

    function canClickTargets() {
        return !content.querySelector(".inlineRenameInput")
    }

    function clickHandler(event) {
        if (inAddBounds(event)) {
            makeRipple(content, event)
            if (id === CONST_LOADED_PROJECT_DROPDOWNS[0]) {
                handleCreateProjectButton(add)
            } else {
                handleCreateSpaceButton(id, add)
            }
        } else if (inOptionsBounds(event)) {
            makeRipple(content, event)
            handleProjectSettingsButton(id, options)
        } else if (canClickTargets()) {
            makeRipple(content, event)
            let openDropdowns = getLocalData("openDropdowns") || {}
            if (dropdown.getAttribute("closed") === "true") {
                dropdown.removeAttribute("closed")
                openDropdowns[id] = "true"
            } else {
                dropdown.setAttribute("closed", "true")
                openDropdowns[id] = "false"
            }
            setLocalData("openDropdowns", openDropdowns)
        }
    }

    content.onmouseover = hoverHandler
    bindClick(content, clickHandler)

    bindRightClick(content, function (event) {
        if (!isMain) {
            if (options.style.display !== 'none') {
                handleProjectSettingsButton(id, options)
                makeRipple(content, event)
            }
        } else {
            handleCreateProjectButton(add)
        }
    })

    if (id === CONST_LOADED_PROJECT_DROPDOWNS[1]) {
        add.style.display = "none"
    }

    let updatePromise = new Promise((resolve => {
        if (userLoaded === true) {
            resolve()
        } else {
            userLoaded.then(resolve)
        }
    }))

    updatePromise.then(() => {
        let openDropdowns = getLocalData("openDropdowns") || {}
        let open = openDropdowns[id]

        if (open !== "true" && open !== "false") {
            
            if (isMain) {
                
                if (id === "Your Projects") {
                    open = "true"
                } else if (id === "Other Projects") {
                    open = "false"
                }
            } else {
                const projectData = getProjectData(id)
                const ownedByUs = projectData && projectData.creator === uId
                if (ownedByUs) {
                    open = "true"
                } else {
                    open = "false"
                }
            }
        }

        if (open === "false") {
            clickHandler(false)
        }
    })

    content.append(collapse, text, options, add)
    dropdown.append(content)

    if (isMain) {
        dropdown.setAttribute("isMain", "true")
        options.style.display = 'none'
    }

    let notice = document.createElement("div")
    notice.className = "projectDropdownNotice"


    let ntext = document.createElement("p")

    let nbutton = document.createElement("button")

    notice.append(ntext, nbutton)

    dropdown.appendChild(notice)

    return dropdown
}

function removeProjectFromSidebar(id) {
    updateProjectToSidebar(id, true)
}

function updateProjectToSidebar(id, isRemoving) {
    
    let ownedProjects = 0;
    for (const pId in loadedProjects) {
        const thisProject = getProjectData(pId)
        if (thisProject) {
            if (thisProject.creator === uId) {
                ownedProjects += 1;
            }
        }
    }

    let ownedDropdown = loadedProjectsDiv.querySelector(".projectDropdown")
    let mainNotice = ownedDropdown.querySelector(".projectDropdownNotice")

    if (ownedProjects > 0) {
        mainNotice.style.display = "none"
    } else {
        mainNotice.style.display = 'block'
        mainNotice.style.setProperty("--left-padding", "0rem")

        let p = mainNotice.querySelector('p')
        p.style.display = 'none'

        let button = mainNotice.querySelector('button')
        button.innerText = "Create First Project"

        bindClick(button, function () {
            handleCreateProjectButton(ownedDropdown.querySelector(".projectDropdownAdd"))
        })
    }

    if (!id) {
        return;
    }

    const project = getProjectData(id)
    const dropdown = loadedProjectsDiv.querySelector("#projectDropdown_" + id)

    if (isRemoving || !project) {
        if (dropdown) {
            dropdown.parentElement.removeChild(dropdown)
        }
        return
    }

    if (!dropdown) {
        addProjectToSidebar(id)
        return;
    }

    if (currentSelectedProject === id) {
        updateGroups()
    }

    const button = dropdown.querySelector("button")
    button.innerText = project.name;

    const notice = dropdown.querySelector(".projectDropdownNotice")
    const nbutton = notice.querySelector("button")

    let isSpace = false

    let spacesToUnload = loadedSpacesForProjects[id] || []
    let spaces = []

    if (project.spaces) {
        for (const spaceId in project.spaces) {
            for (let i = spacesToUnload.length; i >= 0; i--) {
                const toUnload = spacesToUnload[i]
                if (toUnload === spaceId) {
                    spacesToUnload.splice(i, 1)
                }
            }
            spaces.push(spaceId)

            const space = project.spaces[spaceId]

            const hasAccess = true 
            if (hasAccess) {
                updateDropdownSpace(id, spaceId)
                isSpace = true
            } else {
                removeDropdownSpace(id, spaceId)
            }
        }
    }

    for (const spaceId of spacesToUnload) {
        removeDropdownSpace(id, spaceId)
    }

    loadedSpacesForProjects[id] = spaces

    const permissions = getPermissions(id)
    const hasOptions = permissions.HasOptions
    nbutton.onclick = null
    if (isSpace) {
        notice.style.display = "none"
    } else {
        notice.style.display = "block"
        const p = notice.querySelector("p")

        if (hasOptions) {
            p.style.display = "none"
            nbutton.innerText = "Create A Space"
            nbutton.style.display = "block"
            bindClick(nbutton, function (event) {
                handleCreateSpaceButton(id, dropdown.querySelector(".projectDropdownAdd"))
            })
        } else {
            p.innerText = "No Shared Spaces"
            p.style.display = "block"
            nbutton.style.display = "none"
        }
    }

    if (hasOptions) {
        dropdown.querySelector(".projectDropdownAdd").style.display = "block"
        dropdown.querySelector(".projectDropdownSettings").style.display = "block"
    } else {
        dropdown.querySelector(".projectDropdownAdd").style.display = "none"
        dropdown.querySelector(".projectDropdownSettings").style.display = "none"
    }
}

function addProjectToSidebar(id) {
    const project = getProjectData(id)

    let dropdown = createDropdown(id)
    dropdown.id = "projectDropdown_" + id

    const options = loadedProjectsDiv.children

    if (project.creator === uId) {
        options[0].appendChild(dropdown)
    } else {
        options[1].appendChild(dropdown)
    }

    updateProjectToSidebar(id)
}

function getHeaderViewWidthWithoutArrows() {
    const headerProjectViewsContainer = document.getElementById('headerProjectViewsContainer')

    const arrows = headerProjectViewsContainer.querySelectorAll('.headerProjectViewArrow')
    const leftArrow = arrows[0]
    const rightArrow = arrows[1]

    let expectedBounds = headerProjectViewsContainer.getBoundingClientRect()
    return expectedBounds.width - (leftArrow.getBoundingClientRect().width * 2) - (rightArrow.getBoundingClientRect().width * 2)
}

function handleHeaderViewScrollTo(child) {
    const headerProjectViewsContainer = document.getElementById('headerProjectViewsContainer')

    const currentBounds = child.getBoundingClientRect()

    const expectedBounds = headerProjectViewsContainer.getBoundingClientRect()
    const visibleWidth = getHeaderViewWidthWithoutArrows()

    const center = (expectedBounds.left + (expectedBounds.width / 2))
    const min = center - (visibleWidth / 2)
    const max = center + (visibleWidth / 2)

    const overRight = (currentBounds.left + currentBounds.width) - max
    if (overRight > 0) {
        updateHeaderViewScroll(overRight)
    }

    const overLeft = min - currentBounds.left
    if (overLeft > 0) {
        updateHeaderViewScroll(-overLeft)
    }
}

function handleHeaderViewArrow(isLeft) {
    const moveAmount = getHeaderViewWidthWithoutArrows()

    updateHeaderViewScroll(isLeft ? -moveAmount : moveAmount)
}

function updateHeaderViewScroll(xOffset, newView) {
    const workspace_header = document.getElementById('workspace_header')
    const headerProjectViewsContainer = document.getElementById('headerProjectViewsContainer')
    const headerProjectViews = document.getElementById('headerProjectViews')

    const firstDivider = workspace_header.querySelector('.headerVerticalDivider')
    const lastDivider = document.getElementById('headerVerticalDividerCreateView')

    const arrows = headerProjectViewsContainer.querySelectorAll('.headerProjectViewArrow')
    const leftArrow = arrows[0]
    const rightArrow = arrows[1]

    let newOffset = (parseFloat(headerProjectViewsContainer.style.getPropertyValue("--scroll-left")) || 0) + xOffset
    if (newView) {
        newOffset = xOffset
    }

    let expectedBounds = headerProjectViewsContainer.getBoundingClientRect()
    let bounds = headerProjectViews.getBoundingClientRect()

    if (bounds.width > expectedBounds.width) {
        const min = 0
        const max = Math.floor(bounds.width - expectedBounds.width)
        newOffset = Math.max(min, Math.min(max, newOffset))
        headerProjectViewsContainer.style.setProperty("--scroll-left", newOffset.toString())

        if (Math.abs(newOffset - min) <= 1) {
            leftArrow.classList.remove('activeArrow')
            firstDivider.style.opacity = '1'
        } else {
            leftArrow.classList.add('activeArrow')
            firstDivider.style.opacity = '0'
        }

        if (Math.abs(newOffset - max) <= 1) {
            rightArrow.classList.remove('activeArrow')
            lastDivider.style.opacity = '1'
        } else {
            rightArrow.classList.add('activeArrow')
            lastDivider.style.opacity = '0'
        }
    } else {
        headerProjectViewsContainer.style.setProperty("--scroll-left", '0')

        leftArrow.classList.remove('activeArrow')
        rightArrow.classList.remove('activeArrow')
        firstDivider.style.opacity = '1'
        lastDivider.style.opacity = '1'
    }
}

function setViewData(projectId, spaceId, viewId, newData) {
    const ref = db.ref(`projects/${projectId}/spaces/${spaceId}/views/${viewId}`)
    if (newData) {
        return ref.set(newData)
    }
    return ref.remove()
}

function updateViewData(projectId, spaceId, viewId, newData) {
    const viewData = getViewData(projectId, spaceId, viewId)
    let copy = deepCopy(viewData)
    for (const key in newData) {
        copy[key] = newData[key]
    }

    copy.creator = uId

    return setViewData(projectId, spaceId, viewId, copy).catch(handleError)
}

function getViewSettingsItems(projectId, spaceId, viewId) {
    const spaceData = getSpaceData(projectId, spaceId)
    const viewData = getViewData(projectId, spaceId, viewId)
    const perms = getPermissions(projectId, spaceId)

    function updateViewField(name, newValue) {
        updateViewData(projectId, spaceId, viewId, {
            [name]: newValue
        })
    }

    let items = []

    if (!viewData) {
        return items
    }

    
    if (viewData.public && perms.EditPublicViews) {
        const defaultToggle = spaceData.defaultView === viewId
        items.push({
            Icon: svg("home"),
            Text: "Default view",
            HelpText: "Default views will be automatically selected upon entering this space",
            HasToggle: true,
            DefaultToggle: defaultToggle,
            Handler: function (event) {
                closeMenu()

                const ref = db.ref(`projects/${projectId}/spaces/${spaceId}/defaultView`)
                if (defaultToggle) {
                    ref.remove().catch(handleError)
                } else {
                    ref.set(viewId).catch(handleError)
                }
            }
        })
    }

    
    
    if (!viewData.public || perms.EditPublicViews) {
        
        items.push({
            Icon: svg("pinned"),
            Text: "Pin view",
            HelpText: "Pinned views are moved to the front of the top bar",
            HasToggle: true,
            DefaultToggle: viewData.pinned,
            Handler: function (event) {
                closeMenu()
                updateViewField('pinned', !viewData.pinned)
            }
        })

        
        if (perms.EditPublicViews) {
            items.push({
                Icon: svg("padlock"),
                Text: "Personal view",
                HelpText: "Personal views are only visible to you",
                HasToggle: true,
                DefaultToggle: !viewData.public,
                Handler: function (event, data) {
                    closeMenu()
                    updateViewField('public', !viewData.public)
                }
            })
        }

        
        items.push({
            Icon: svg("pencil"),
            Text: "Rename",
            Handler: function (event) {
                closeMenu()
                handleRename({
                    namespace: 'view',
                    projectId: projectId,
                    spaceId: spaceId,
                    viewId: viewId,
                })
            },
            ShowHeaderIcon: true,
        })
        
        items.push({
            Icon: svg("delete"),
            Text: "Delete",
            IconColor: getColorString(CONST_DELETE_COLOR, true),
            Handler: function (event) {
                closeMenu()
                setViewData(projectId, spaceId, viewId, false)
            },
            ShowHeaderIcon: true,
        })
    }

    if (items.length <= 4) {
        for (const item of items) {
            item.ShowHeaderIcon = false
        }
    }

    return items
}


function getDaysBetween(StartDate, EndDate) {
    const oneDay = 1000 * 60 * 60 * 24;

    const start = Date.UTC(EndDate.getFullYear(), EndDate.getMonth(), EndDate.getDate());
    const end = Date.UTC(StartDate.getFullYear(), StartDate.getMonth(), StartDate.getDate());

    return (start - end) / oneDay;
}

function getFormattedDate(time) {
    const date = new Date(time)

    const month = date.getMonth() + 1
    const day = date.getDate()
    const year = (date.getYear() + 1900).toString()

    const yearString = year.startsWith('20') ? year.substring(2) : year

    let defaultFormat = `${month}/${day < 10 ? '0' : ''}${day}/${yearString}`

    if (userSettings.dateFormat === 2) {
        defaultFormat = `${day}/${month < 10 ? '0' : ''}${month}/${yearString}`
    }

    const now = new Date()
    const daysBetween = getDaysBetween(now, date)

    const index = {
        [1]: "Tomorrow",
        [0]: "Today",
        [-1]: "Yesterday"
    }

    if (index[daysBetween]) {
        return index[daysBetween]
    }

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    if (daysBetween > -7 && daysBetween < -1) {
        return 'Last ' + days[date.getDay()]
    }

    if (daysBetween > 1 && daysBetween < 7) {
        return days[date.getDay()]
    }

    return defaultFormat
}

function getMaxStringLengthFor(namespace) {
    return CONST_MAX_STRING_LENGTHS_FOR_NAMESPACES[namespace]
}

function handleRename(data) {
    let minLength = 1
    let forcedPadding
    let textElement
    let doUpdate

    if (data.namespace === "project") {
        const rootElement = loadedProjectsDiv.querySelector("#projectDropdown_" + data.projectId)
        if (rootElement) {
            textElement = rootElement.querySelector(".projectDropdownContent").querySelector("button")
            doUpdate = function (result) {
                db.ref('projects/' + data.projectId + '/name').set(result.newName).catch(handleError)
            }
        }
    } else if (data.namespace === 'space') {
        const rootElement = loadedProjectsDiv.querySelector("#projectDropdown_" + data.projectId).querySelector("#projectDropdownSpace_" + data.spaceId)
        if (rootElement) {
            textElement = rootElement.querySelector("p")
            doUpdate = function (result) {
                db.ref('projects/' + data.projectId + '/spaces/' + data.spaceId + '/name').set(result.newName).catch(handleError)
            }
        }
    } else if (data.namespace === 'view') {
        const rootElement = document.getElementById("headerProjectView_" + data.viewId)
        if (rootElement) {
            textElement = rootElement.querySelector("p")
            doUpdate = function (result) {
                updateViewData(data.projectId, data.spaceId, data.viewId, {
                    name: result.newName
                })
            }
        }
    } else if (data.namespace === 'task') {
        forcedPadding = 'calc(var(--task-pad) * 0.75)'
        const rootElement = workspacePage.querySelector("#task_" + data.taskId)
        if (rootElement) {
            textElement = rootElement.querySelector(".taskTitleText")
            doUpdate = function (result) {
                updateTaskData(data.projectId, data.spaceId, data.taskId, {
                    name: result.newName
                }).catch(handleError)
            }
        }
    } else if (data.namespace === 'subtask') {
        forcedPadding = 'calc(var(--task-pad) * 0.75)'
        minLength = 0
        const rootElement = workspacePage.querySelector("#task_" + data.taskId).querySelector("#subtask_" + data.subtaskId)
        if (rootElement) {
            textElement = rootElement.querySelector(".taskTitleText")
            doUpdate = function (result) {
                const name = result.newName
                if (name.length === 0) {
                    if (!result.applyOrExit) {
                        updateSubtaskData(data.projectId, data.spaceId, data.taskId, data.subtaskId, false)
                    }
                    return
                }
                updateSubtaskData(data.projectId, data.spaceId, data.taskId, data.subtaskId, {
                    name: name
                })
            }
        }
    }

    if (textElement) {
        handleInlineRename(textElement, minLength, getMaxStringLengthFor(data.namespace), forcedPadding).then((result) => {
            if (data.overrideHandler) {
                data.overrideHandler(result)
                return
            }

            if (result) {
                doUpdate(result)
            }
        })
    }
}



async function handleInlineRename(toEdit, minLength = 0, maxLength, forcedPadding) {
    return new Promise((resolve => {
        const initialName = toEdit.innerText

        function continueInlineRename(on, newValue, isOnParent) {
            if (newValue) {
                on.setAttribute('inlinerename', 'true')
            } else {
                on.removeAttribute('inlinerename')
            }

            if (on.parentElement) {
                if (!isOnParent || on.parentElement.getAttribute('continueinlinerename')) {
                    continueInlineRename(on.parentElement, newValue, true)
                }
            }
        }

        continueInlineRename(toEdit, true)
        continueInlineRename(toEdit.parentElement, true)

        const newInputContainer = document.createElement('div')
        newInputContainer.classList.add("inlineRenameInputContainer")

        const newInput = document.createElement('textarea')
        newInput.classList.add("inlineRenameInput")
        newInput.value = initialName
        if (maxLength) {
            newInput.maxLength = maxLength
        }

        newInputContainer.append(newInput)

        const parent = toEdit.parentElement
        parent.append(newInputContainer)


        function updateInputLayout() {
            const rawBounds = toEdit.getBoundingClientRect()

            const calculatedStyle = window.getComputedStyle(toEdit)
            newInput.style.fontSize = calculatedStyle.fontSize

            const pLeft = parseFloat(calculatedStyle.paddingLeft)
            const pRight = parseFloat(calculatedStyle.paddingRight)
            const pTop = parseFloat(calculatedStyle.paddingTop)
            const pBottom = parseFloat(calculatedStyle.paddingBottom)

            const bounds = {
                left: rawBounds.left + (pLeft),
                top: rawBounds.top + (pTop),
                width: rawBounds.width - (pLeft + pRight),
                height: rawBounds.height - (pTop + pBottom),
            }

            const parentBounds = parent.getBoundingClientRect()

            if (bounds.height <= 0.1) {
                return
            }

            if (!forcedPadding) {
                const padding = Math.min(parentBounds.height - bounds.height, parentBounds.width - bounds.width) * 0.5 * 0.5
                newInputContainer.style.setProperty('--padding', `${padding}px`)
            } else {
                newInputContainer.style.setProperty('--padding', forcedPadding)
            }


            for (const item of ['left', 'top']) {
                const real = bounds[item] - parentBounds[item]
                newInputContainer.style.setProperty(`--${item}`, `calc(${real}px - var(--padding))`)
            }

            for (const item of ['width', 'height']) {
                newInputContainer.style[item] = `${bounds[item]}px`
            }
        }
        updateInputLayout()

        let newName = initialName
        function handleNewInput() {
            newName = newInput.value.replace(/\s+/gm, ' ')

            newInput.value = newName
            if (newName.length > 0) {
                toEdit.innerText = newName
            } else {
                toEdit.innerText = "-"
            }

            updateInputLayout()
        }

        handleNewInput()
        newInput.addEventListener('input', handleNewInput);

        function cleanup() {
            finished = true
            parent.removeChild(newInputContainer)

            continueInlineRename(toEdit, false)
            continueInlineRename(toEdit.parentElement, false)

            toEdit.innerText = initialName
            toEdit.style.visibility = ''
        }

        let finished
        function handleFinish(applyChange, applyOrExit) {
            if (finished) { return }

            if (newName.length < minLength) {
                if (applyOrExit) {
                    cleanup()
                    resolve(false)
                } else {
                    newInput.focus()
                }
                return
            }

            cleanup()

            if (applyChange && newName !== initialName) {
                resolve({
                    newName: newName,
                    applyOrExit: applyOrExit,
                })
            } else {
                resolve(false)
            }
        }

        
        newInput.onkeypress = function (event) {
            if (event.key === "Enter") {
                event.preventDefault()
                handleFinish(true, false)
            }
        }

        
        newInput.onkeydown = function (event) {
            if (event.key === "Escape") {
                handleFinish(false, true)
            }
        }

        
        newInput.onblur = function (event) {
            handleFinish(true, true)
        }

        
        bindRightClick(parent, function () {
            handleFinish(true, true)
        }, true)

        toEdit.style.visibility = 'hidden'
        newInput.focus()
    }))
}

function handleViewSettingsButton(projectId, spaceId, viewId, source) {
    showMenu({
        Header: "View Options",
        Source: source,
        Items: getViewSettingsItems(projectId, spaceId, viewId),
    })
}

function openCreateViewWindow(projectId, spaceId, fromButton) {
    const baseProjectViewSettingsContainer = document.getElementById('baseProjectViewSettingsContainer')
    const projectViewSettings = document.getElementById('projectViewSettings')
    const typesList = document.getElementById('projectViewTypesList')

    const inputContainer = typesList.querySelector("div")
    const iconInput = inputContainer.querySelector("svg")
    const nameInput = inputContainer.querySelector("input")

    let bounds = fromButton.getBoundingClientRect()
    projectViewSettings.style.left = `calc(${bounds.left}px - var(--200u))`
    projectViewSettings.style.top = `calc(${bounds.top + bounds.height}px + var(--100u)`

    let containerTypesDiv = typesList.querySelector("#projectViewTypesListContainer")
    containerTypesDiv.innerHTML = ""

    const projectViewSettingsContent = projectViewSettings.querySelector("#projectViewSettingsContent")
    const projectViewSettingsContentHeader = projectViewSettingsContent.querySelector("#projectViewSettingsContentHeader")
    const projectViewSettingsContentDescription = projectViewSettingsContent.querySelector("#projectViewSettingsContentDescription")

    function focusInput() {
        nameInput.focus()
    }

    let selectedType;
    let divs = []
    function handleClick(itemI) {
        const data = CONST_MAKE_VIEW_DATA[itemI]
        selectedType = itemI
        setSvgSource(iconInput, data.Icon)
        focusInput()

        projectViewSettingsContentHeader.innerText = data.Name
        projectViewSettingsContentDescription.innerText = data.Description

        for (let i = 0; i < CONST_MAKE_VIEW_DATA.length; i++) {
            const element = divs[i]
            if (itemI === i) {
                element.setAttribute('selected', 'true')
            } else {
                element.removeAttribute('selected')
            }
        }
    }

    for (let i = 0; i < CONST_MAKE_VIEW_DATA.length; i++) {
        const item = CONST_MAKE_VIEW_DATA[i]

        let div = document.createElement('div')
        div.setAttribute('class', 'viewTypeOption')

        let svg = createSvg(item.Icon)

        let p = document.createElement('p')
        p.innerText = item.Name

        
        if (!item.PremiumOnly) {
            bindClick(div, function () {
                handleClick(i)
            })

            if (selectedType === undefined) {
                selectedType = i
            }
        } else {
            div.setAttribute('locked', 'true')
            let svg2 = createSvg('padlock')
            svg2.classList.add('viewTypeOptionLocked')
            div.append(svg2)
        }
        div.append(svg, p)
        divs.push(div)

        containerTypesDiv.append(div)
    }

    handleClick(selectedType)

    function handleKey(event) {
        if (event.key === "Enter") {
            createButton()
        }
    }

    nameInput.onkeydown = handleKey
    nameInput.onkeyup = handleKey

    const pinned = projectViewSettings.querySelector("#projectViewSettingsPinned")
    const pinnedToggle = pinned.querySelector(".fancyToggle")
    while (pinnedToggle.getAttribute('selected')) {
        swapToggle(pinnedToggle, true)
    }
    bindClick(pinned, function () {
        focusInput()
        swapToggle(pinnedToggle, true)
    })

    const personal = projectViewSettings.querySelector("#projectViewSettingsPersonal")
    const personalToggle = personal.querySelector(".fancyToggle")

    const perms = getPermissions(currentSelectedProject, currentSelectedSpace)

    if (perms.EditPublicViews) {
        personal.style.display = 'grid'
        while (!personalToggle.getAttribute('selected')) {
            swapToggle(personalToggle, true)
        }
        bindClick(personal, function () {
            focusInput()
            swapToggle(personalToggle, true)
        })
    } else {
        personal.style.display = 'none'
    }

    async function createButton() {
        if (create.disabled) { return }
        create.disabled = true

        let name = nameInput.value
        const data = CONST_MAKE_VIEW_DATA[selectedType]

        if (name.length === 0) {
            name = `${data.Name}`
        }

        create.innerText = "Adding..."

        const viewData = {
            name: name,
            creator: uId,
            type: selectedType,
            public: personalToggle.getAttribute('selected') !== 'true',
            pinned: pinnedToggle.getAttribute('selected') === 'true',
        }

        const viewId = generatePushID()
        await setViewData(projectId, spaceId, viewId, viewData).catch(handleError)
        selectProjectSpaceView(viewId)

        handleClose()
    }
    const create = document.getElementById('projectViewSaveSettingsButton')
    create.innerText = "Add View"
    create.disabled = false
    bindClick(create, createButton)


    function handleClose() {
        const options = processAnimationOptions(CONST_VIEW_SETTINGS_ANIMATION.Options)
        options.fill = 'none'

        baseProjectViewSettingsContainer.animate([
            CONST_VIEW_SETTINGS_ANIMATION.Base.In,
            CONST_VIEW_SETTINGS_ANIMATION.Base.Out,
        ], options)
        projectViewSettings.animate([
            CONST_VIEW_SETTINGS_ANIMATION.In,
            CONST_VIEW_SETTINGS_ANIMATION.Out,
        ], options).onfinish = function () {
            baseProjectViewSettingsContainer.style.display = 'none'
        }
    }

    bindClick(baseProjectViewSettingsContainer, function (event) {
        if (event.target === baseProjectViewSettingsContainer) {
            handleClose()
        }
    })

    projectViewSettings.style.setProperty("--place-left", "1")
    baseProjectViewSettingsContainer.style.display = 'block'
    let root = document.body.getBoundingClientRect()
    let displayBounds = projectViewSettings.getBoundingClientRect()
    if (displayBounds.left + displayBounds.width >= root.width) {
        let innerBounds = projectViewSettingsContent.getBoundingClientRect()
        projectViewSettings.style.setProperty("--place-left", "0")
        projectViewSettings.style.left = `calc((${displayBounds.left - innerBounds.width}px)`

        displayBounds = projectViewSettings.getBoundingClientRect()
        if (displayBounds.left + displayBounds.width >= root.width) {
            projectViewSettings.style.left = `calc(${root.width - displayBounds.width}px - var(--50u))`
        }
    }

    baseProjectViewSettingsContainer.animate([
        CONST_VIEW_SETTINGS_ANIMATION.Base.Out,
        CONST_VIEW_SETTINGS_ANIMATION.Base.In,
    ], processAnimationOptions(CONST_VIEW_SETTINGS_ANIMATION.Options))
    projectViewSettings.animate([
        CONST_VIEW_SETTINGS_ANIMATION.Out,
        CONST_VIEW_SETTINGS_ANIMATION.In,
    ], processAnimationOptions(CONST_VIEW_SETTINGS_ANIMATION.Options))

    nameInput.value = ''
    focusInput()
}

function handleCreateView(projectId, spaceId, sourceButton) {
    if (sourceButton.getAttribute('debounce') !== 'true') {
        sourceButton.setAttribute('debounce', 'true')

        function cleanup() {
            sourceButton.removeAttribute('debounce')
        }

        openCreateViewWindow(projectId, spaceId, sourceButton)
        cleanup()
    }
}

function updateProjectHeaderDisplay(projectId, spaceId) {
    
    const workspace_header = document.getElementById('workspace_header')
    let headerProjectSpaceDisplay = document.getElementById('headerProjectSpaceDisplay')
    let iconBack = headerProjectSpaceDisplay.querySelector('div')
    let icon = iconBack.querySelector('div')

    const spaceData = getSpaceData(projectId, spaceId)
    const color = (spaceData.color != null && CONST_ALL_COLORS[spaceData.color]) || getAccentColor(2)
    iconBack.style.backgroundColor = getColorString(color, false, 0.25)
    icon.style.backgroundColor = getColorString(color, false)

    let titleText = headerProjectSpaceDisplay.querySelector('p')
    titleText.innerText = spaceData.name

    let createViewButton = document.getElementById('headerProjectCreateView').querySelector('div')
    bindClick(createViewButton, function () {
        handleCreateView(projectId, spaceId, createViewButton)
    })

    const settingsButton = headerProjectSpaceDisplay.querySelector("svg")

    const perms = getPermissions(projectId, spaceId)
    const hasOptions = perms.HasOptions
    if (hasOptions) {
        headerProjectSpaceDisplay.setAttribute('hasOptions', 'true')
    } else {
        headerProjectSpaceDisplay.removeAttribute('hasOptions')
    }

    bindClick(headerProjectSpaceDisplay, function (event) {
        event.preventDefault()
        let bounds = iconBack.getBoundingClientRect()
        if (event.clientX >= bounds.left && event.clientX <= bounds.left + bounds.width) {
            if (perms.ChangeColor) {
                handleSpaceColorButton(projectId, spaceId, iconBack)
            }
        } else if (hasOptions) {
            handleSpaceSettingsButton(projectId, spaceId, settingsButton.parentElement)
        }
    })

    bindRightClick(headerProjectSpaceDisplay, function () {
        if (hasOptions) {
            handleSpaceSettingsButton(projectId, spaceId, settingsButton.parentElement)
        }
    })

    
    if (perms.EditTasks) {
        workspacePage.setAttribute('edit', 'true')
    } else {
        workspacePage.removeAttribute('edit')
    }

    
    const headerProjectViews = document.getElementById('headerProjectViews')
    const views = spaceData.views

    for (const view of headerProjectViews.children) {
        view.setAttribute('removeafter', 'true') 
    }

    let firstDivider = workspace_header.querySelector(".headerVerticalDivider")
    if (views) {
        for (const viewId in views) {
            const view = views[viewId]
            const typeData = CONST_MAKE_VIEW_DATA[view.type]

            const id = "headerProjectView_" + viewId
            let existing = headerProjectViews.querySelector("#" + id)

            if (view.public || view.creator === uId) {
                if (!existing) {
                    existing = document.createElement('div')
                    existing.className = "headerProjectViewContainer"

                    existing.id = id
                    existing.setAttribute('viewid', viewId)

                    bindClick(existing, function (event) {
                        event.preventDefault()
                        selectProjectSpaceView(viewId)
                    })

                    const div = document.createElement('div')
                    div.className = "headerProjectView"
                    div.setAttribute('continuehasmenu', 'true')

                    const svg = createSvg()
                    svg.setAttribute('class', 'headerProjectViewIcon')

                    const pinDiv = document.createElement('div')
                    pinDiv.setAttribute('class', 'headerProjectViewPin')
                    pinDiv.append(createSvg('pinned'))

                    const personalDiv = document.createElement('div')
                    personalDiv.setAttribute('class', 'headerProjectViewPersonal')
                    personalDiv.append(createSvg('padlock'))

                    const p = document.createElement('p')

                    const settingsContainer = document.createElement('div')
                    settingsContainer.setAttribute('class', 'headerProjectViewSettingsContainer')

                    function openSettings() {
                        if (!existing.getAttribute('settings')) { return }
                        handleViewSettingsButton(projectId, spaceId, viewId, settingsContainer)
                    }

                    bindClick(settingsContainer, function () {
                        if (existing.getAttribute('selected')) {
                            openSettings()
                        }
                    })
                    bindRightClick(existing, openSettings)

                    const settings = createSvg('options')
                    settingsContainer.append(settings)

                    div.append(pinDiv, personalDiv, svg, p, settingsContainer)
                    existing.append(div)
                    headerProjectViews.append(existing)
                }

                const p = existing.querySelector("p")
                p.innerText = view.name

                const icon = existing.querySelector('.headerProjectViewIcon')
                setSvgSource(icon, typeData.Icon)

                if (view.pinned) {
                    existing.setAttribute('pinned', 'true')
                } else {
                    existing.removeAttribute('pinned')
                }

                if (view.public) {
                    existing.removeAttribute('personal')
                } else {
                    existing.setAttribute('personal', 'true')
                }

                if (getViewSettingsItems(projectId, spaceId, viewId).length > 0) {
                    existing.setAttribute('settings', 'true')
                } else {
                    existing.removeAttribute('settings')
                }

                existing.removeAttribute('removeafter') 
            }
        }
    }

    const hChildren = headerProjectViews.children
    let leftChildren = {}
    for (let i = hChildren.length - 1; i >= 0; i--) {
        const view = hChildren[i]
        if (view.getAttribute('removeafter') === 'true') {
            headerProjectViews.removeChild(view)
        } else {
            leftChildren[view.getAttribute('viewid')] = view
        }
    }

    leftChildren = sortByIndex(leftChildren)

    const toReorder = []
    for (const viewId in leftChildren) {
        const child = leftChildren[viewId]
        headerProjectViews.removeChild(child)
        let found
        const pinnedDiv = child.getAttribute('pinned')
        const publicDiv = !child.getAttribute('personal')

        for (let i = 0; i < toReorder.length; i++) {
            const item = toReorder[i]
            const itemPinned = item.getAttribute('pinned')
            const itemPublic = !item.getAttribute('personal')

            let insertBefore =
                (publicDiv && !itemPublic) ||
                (pinnedDiv && !itemPinned && publicDiv === itemPublic)
            if (insertBefore) {
                found = true
                toReorder.splice(i, 0, child)
                break
            }
        }

        if (!found) {
            toReorder.push(child)
        }
    }

    for (let i = 0; i < toReorder.length; i++) {
        if (i > 0) {
            let divider = document.createElement('div')
            divider.setAttribute('class', 'headerVerticalDivider')
            headerProjectViews.appendChild(divider)
        }

        const item = toReorder[i]
        headerProjectViews.appendChild(item)
    }

    if (toReorder.length > 0) {
        firstDivider.style.display = 'block'
    } else {
        firstDivider.style.display = 'none'
    }

    
    if (currentSelectedView) {
        const would = wouldSelectProjectSpaceView(currentSelectedView)
        if (would === currentSelectedView) {
            selectProjectSpaceView(currentSelectedView)
        } else {
            selectProjectSpaceView(false)
        }
    }

    refreshTasks()
}

let lastSelectable 
function updateSelectable(newSelectable) {
    currentSelectedProject = currentSelectedProject = false

    let toSet = [[lastSelectable, "false"], [newSelectable, "true"]]
    for (const data of toSet) {
        let item = data[0]
        let value = data[1];

        if (item != null) {
            let parent = item.parentElement
            if (parent != null) {
                let parentParent = parent.parentElement
                let otherDropdownContent = parentParent.querySelector(".projectDropdownContent")
                if (otherDropdownContent != null && otherDropdownContent.parentElement === parentParent) {
                    let rootRootText = otherDropdownContent.querySelector("button")
                    parent.setAttribute('selected', value)
                    rootRootText.setAttribute('selected', value)
                }
            }
            item.setAttribute('selected', value)
        }
    }

    lastSelectable = newSelectable;

    computeAllDropdowns()
}

let callN = 0 

async function selectProjectSpace(projectId, spaceId) {
    if (currentSelectedProject === projectId && currentSelectedSpace === spaceId) { return }

    let projectData = projectId && loadedProjects && getProjectData(projectId)

    if (!projectData) {
        currentSelectedProject = false
        return
    }

    showPage('workspace')
    callN++;
    let thisCallN = callN

    let dropdown = loadedProjectsDiv.querySelector("#projectDropdown_" + projectId)
    let spaceSelection = dropdown.querySelector("#projectDropdownSpace_" + spaceId)

    updateSelectable(spaceSelection)

    let animationPromise = new Promise(resolve => {
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        resolve()
    })

    await animationPromise

    
    if (callN !== thisCallN) {
        return
    }

    
    currentSelectedProject = projectId
    currentSelectedSpace = spaceId

    
    clearLoadedTasks()

    
    updateProjectHeaderDisplay(projectId, spaceId)

    
    const recentSpaces = getLocalData('recentSpaces') || []

    
    for (let i = 0; i < recentSpaces.length; i++) {
        const itemI = recentSpaces[i]
        if (projectId === itemI.projectId && spaceId === itemI.spaceId) {
            recentSpaces.splice(i, 1)
            break
        }
    }

    
    recentSpaces.splice(0, 0, {
        projectId: projectId,
        spaceId: spaceId,
    })

    setLocalData('recentSpaces', recentSpaces)

    
    const defaultView = loadedProjects[projectId].spaces[spaceId].defaultView
    const toSelectFirst = currentSelectedView
    const wouldSelectFirst = wouldSelectProjectSpaceView(currentSelectedView, false)

    if (toSelectFirst !== wouldSelectFirst || !toSelectFirst) {
        selectProjectSpaceView(defaultView, true)
    } else {
        selectProjectSpaceView(currentSelectedView, false, true)
    }

    if (!currentSelectedView) {
        selectProjectSpaceView(true)
    }

    
    await loadViewOrderData()

    
    loadTaskData(projectId, spaceId)

    
    workspacePage.animate(CONST_WORKSPACE_ANIMATION.In, processAnimationOptions(CONST_WORKSPACE_ANIMATION.Options))
}

function wouldSelectProjectSpaceView(viewId, onlyAcceptDefault) {
    const headerProjectViews = document.getElementById('headerProjectViews')

    let found = false

    for (const view of headerProjectViews.children) {
        if (view.getAttribute('viewid') === viewId && (!onlyAcceptDefault || !view.getAttribute('personal'))) {
            view.setAttribute('selected', 'true')
            found = viewId
        } else {
            view.removeAttribute('selected')
        }
    }

    if (!found && headerProjectViews.children.length > 0) {
        let first = headerProjectViews.children[0]
        found = first.getAttribute('viewid')
        first.setAttribute('selected', 'true')
    }

    return found
}

function selectProjectSpaceView(viewId, onlyAcceptDefault, forceUpdate) {
    const headerProjectCreateView = document.getElementById('headerProjectCreateView')
    const headerProjectViews = document.getElementById('headerProjectViews')
    const notInAViewContainer = document.getElementById('notInAViewContainer')

    let toSelect = wouldSelectProjectSpaceView(viewId, onlyAcceptDefault)

    let spaceData = getSpaceData(currentSelectedProject, currentSelectedSpace)
    const viewData = getViewData(currentSelectedProject, currentSelectedSpace, toSelect)

    if (!viewData || !viewId) {
        toSelect = false
    }

    if (toSelect !== currentSelectedView || toSelect === false || forceUpdate) {
        const base = `/p/${currentSelectedProject}/${currentSelectedSpace}`
        if (toSelect) {
            notInAViewContainer.style.display = 'none'
            currentSelectedView = toSelect

            if (onlyAcceptDefault || spaceData.defaultView === currentSelectedView) {
                updatePath(base)
            } else {
                updatePath(base + `/${currentSelectedView}`)
            }
        } else {
            notInAViewContainer.style.display = 'block'

            const ps = notInAViewContainer.querySelectorAll("p")
            const mainInfo = ps[0]
            const highlightedText = ps[1]
            const mainInfo2 = ps[2]
            const highlightedText2 = ps[3]
            const mainInfo3 = ps[4]

            function onSelectClick() {
                selectProjectSpaceView(true)
            }

            function onCreateClick() {
                handleCreateView(currentSelectedProject, currentSelectedSpace, headerProjectCreateView)
            }

            if (headerProjectViews.querySelectorAll(".headerProjectViewContainer").length > 0) {
                mainInfo.innerHTML = "Uh oh! The view you were in appears to have been deleted! Try&nbsp;"
                highlightedText.innerHTML = "selecting a view above"
                mainInfo2.innerHTML = "&nbsp;or&nbsp;"
                highlightedText2.innerHTML = "creating a new one"
                mainInfo3.innerHTML = "!"

                highlightedText.onclick = onSelectClick
                highlightedText2.onclick = onCreateClick

                highlightedText2.style.display = mainInfo3.style.display = ''
            } else {
                const projectData = getSelectedProjectData()
                const add = (projectData && projectData.creator !== uId) ? 'public' : ''
                mainInfo.innerHTML = `This space has no ${add} views! Try&nbsp;`
                highlightedText.innerHTML = "creating a view"
                mainInfo2.innerHTML = "!"

                highlightedText.onclick = onCreateClick

                highlightedText2.style.display = mainInfo3.style.display = 'none'
            }

            currentSelectedView = false
            updatePath(base)
        }

        
        resetSearchInput()

        
        updateGroups()
    }

    
    const headerProjectViewBottomRight = document.getElementById('headerProjectViewBottomRight')
    const options = headerProjectViewBottomRight.querySelector('.headerProjectViewBottomOptions')

    const allottedOptions = currentSelectedView && getViewSettingsItems(currentSelectedProject, currentSelectedSpace, currentSelectedView)
    if (allottedOptions && allottedOptions.length === 0) {
        headerProjectViewBottomRight.style.display = 'none'
    } else {
        headerProjectViewBottomRight.style.display = ''
        bindClick(options, function () {
            const sources = document.getElementById('headerProjectMiddle').querySelectorAll(`.headerProjectViewContainer`)
            let source
            for (const item of sources) {
                if (item.getAttribute('viewid') === currentSelectedView) {
                    source = item.querySelector('.headerProjectViewSettingsContainer').querySelector('svg')
                }
            }

            if (source) {
                handleViewSettingsButton(currentSelectedProject, currentSelectedSpace, viewId, source)
            }
        })
    }

    if (currentSelectedView) {
        const child = headerProjectViews.querySelector("#headerProjectView_" + currentSelectedView)
        handleHeaderViewScrollTo(child)
    }
}

function getPermissions(projectId, spaceId) {
    let projectAccess = (loadedProjects[projectId] && loadedProjects[projectId].access[uId]) || 0
    let basePermissions = {
        View: projectAccess >= 1,

        EditTasks: projectAccess >= 3,

        HasOptions: projectAccess >= 4,
        CreateSpaces: projectAccess >= 4,
        ChangeName: projectAccess >= 4,
        EditPublicViews: projectAccess >= 4,
        EditStatuses: projectAccess >= 4,

        Share: projectAccess >= 5,

        Delete: projectAccess >= 5,
    }

    if (!spaceId) { 
        return basePermissions
    } else {
        let otherPermissions = {
            ChangeColor: projectAccess >= 4,
        }

        for (const key in basePermissions) {
            otherPermissions[key] = basePermissions[key]
        }
        return otherPermissions
    }
}

let resetSearchInput

function initTaskContainer() {
    
    let grabbing = false
    let initX = 0
    let initScrollLeft = 0

    function inValidBounds(event) {
        const target = event.target
        const valid = target === tasksContainer || target.classList.contains("taskGroupContainerContent")
        return valid && document.body.parentElement.classList.contains('notDraggingTask')
    }

    function tasksContainerEventShouldDrag(event) {
        let isDraggable = inValidBounds(event)
        let show = (isDraggable || grabbing) ? (grabbing ? "grabbing" : "grab") : ""

        const viewData = getSelectedViewData()
        if (!viewData) {
            show = ""
        } else {
            if (isDraggable) {
                event.preventDefault()
                if (event.type !== 'mousemove') {
                    if (document.activeElement) {
                        if (document.activeElement.blur) {
                            document.activeElement.blur()
                        }
                    }
                }
            }
            if (grabbing) {
                deselectAll()
                let diff = initX - event.clientX

                workspacePage.scrollTo({
                    top: 0,
                    left: initScrollLeft + diff,
                    behavior: "auto",
                })
            }
        }

        tasksContainer.style.cursor = show
    }

    document.addEventListener("mousemove", function (event) {
        tasksContainerEventShouldDrag(event)
    })

    document.addEventListener("mouseup", function (event) {
        if (event.button === 0 || event.button === 1) {
            grabbing = false
            tasksContainerEventShouldDrag(event)
        }
    })

    document.addEventListener("mousedown", function (event) {
        if (event.button === 0 || event.button === 1) {
            const canGrab = inValidBounds(event)
            if (canGrab) {
                initX = event.clientX
                initScrollLeft = workspacePage.scrollLeft

                grabbing = true
                tasksContainerEventShouldDrag(event)
            }
        }
    })

    
    const searchDiv = document.getElementById('headerProjectViewSearch')
    const searchInput = searchDiv.querySelector('input')
    const searchButton = searchDiv.querySelector('svg')
    const closeButton = searchDiv.querySelectorAll('svg')[1]

    bindClick(searchButton, function () {
        searchInput.focus()
        searchInput.setSelectionRange(0, searchInput.value.length)
    })

    bindClick(closeButton, function () {
        resetSearchInput()
    })

    function doesTaskMatchSearch(taskData, search) {
        if (search.length === 0) {
            return true
        } else {
            let allTextInItem = []
            allTextInItem.push(taskData.name)

            if (taskData.subtasks) {
                for (const subtaskId in taskData.subtasks) {
                    const subtask = taskData.subtasks[subtaskId]
                    allTextInItem.push(subtask.name)
                }
            }

            for (const text of allTextInItem) {
                if (text.includes(search)) {
                    return true
                }
            }
        }

        return false
    }

    function handleInput() {
        const newInput = searchInput.value
        if (newInput.length > 0) {
            closeButton.style.opacity = '1';
        } else {
            closeButton.style.opacity = '0';
        }

        const items = tasksContainer.querySelectorAll('.taskDivContainer')
        for (const task of items) {
            const taskId = getTaskIdFromTaskDiv(task)
            const taskData = getTaskDataFromElement(task)

            if (taskId && taskId !== FAKE_NEW_ITEM_ID) {
                if (doesTaskMatchSearch(taskData, newInput)) {
                    task.removeAttribute('notvalidforsearch')
                } else {
                    task.setAttribute('notvalidforsearch', 'true')
                }
            }
        }
    }

    resetSearchInput = function () {
        searchInput.blur()
        searchInput.value = ''
        handleInput()
    }

    searchInput.oninput = handleInput
    handleInput()

    
    const headerProjectViewBottomRight = document.getElementById('headerProjectViewBottomRight')
    const sortButton = headerProjectViewBottomRight.querySelector('.headerProjectViewBottomSort')

    bindClick(sortButton, function () {
        const viewData = getViewData(currentSelectedProject, currentSelectedSpace, currentSelectedView)
        const viewSort = viewData.order || 0

        let items = []
        for (let i = 0; i < CONST_SORT_METHODS.length; i++) {
            const sortMethod = CONST_SORT_METHODS[i]
            items.push({
                Text: sortMethod.Name,
                HasCheck: viewSort === i,
                Handler: function () {
                    closeMenu()
                    updateViewData(currentSelectedProject, currentSelectedSpace, currentSelectedView, {
                        order: i,
                    })
                }
            })
        }

        showMenu({
            Header: 'Sort by',
            Source: sortButton,
            Items: items,
        })
    })
}

function setNewTaskDivsVisible(visible) {
    function createCreateTaskDiv() {
        const div = document.createElement('div')
        div.className = "createTaskDiv"

        const svg = createSvg('add')

        const p = document.createElement('p')
        p.innerText = "New Task"

        div.append(svg, p)

        bindClick(div, function (event) {
            handleCreateTaskButton(div.parentElement.parentElement.getAttribute('group-id'))
        })

        return div
    }



    for (const content of tasksContainer.querySelectorAll(".taskGroupContainerContent")) {
        let existing = content.querySelector(".createTaskDiv")
        if (!existing) {
            existing = createCreateTaskDiv()
            content.append(existing)
        }

        if (visible === false) {
            existing.setAttribute('hidden', 'true')
        } else if (visible === true) {
            existing.removeAttribute('hidden')
        }
    }
}

function getOrderedStatuses(projectId, spaceId) {
    function copyStatus(status) {
        return {
            id: status.id,
            name: status.name,
            color: status.color,
        }
    }

    let statuses
    if (!projectId) {
        
        statuses = spaceId
    } else {
        statuses = loadedProjects[projectId].statuses
    }

    const ordered = []

    const start = statuses.start
    ordered.push(copyStatus(start))

    for (const n in statuses) {
        const status = statuses[n]
        let num = parseInt(n)
        if (!isNaN(num)) {
            ordered.push(copyStatus(status))
        }
    }

    const finish = statuses.finish
    ordered.push(copyStatus(finish))

    return ordered
}

function getGroupIdFromTaskData(taskData) {
    const viewData = getSelectedViewData()
    if (!viewData) { return }

    const groupMethods = CONST_GROUP_METHODS[viewData.group || 0]
    return groupMethods.GetGroupIdFromTaskData(taskData)
}

function getLocationForGroupId(groupId) {
    let found

    for (const child of tasksContainer.querySelectorAll(".taskGroupContainer")) {
        if (!found) {
            found = child
        }

        if (!groupId) {
            break
        }

        if (child.getAttribute('group-id') === groupId.toString()) {
            found = child
            break
        }
    }

    return found && found.querySelector(".taskGroupContainerContent")
}

function getViewGroupCollapsedData(useData) {
    const currentData = useData || getLocalData('collapsedGroups') || {}

    let project = currentData[currentSelectedProject]
    if (!project) {
        project = currentData[currentSelectedProject] = {}
    }

    let space = project[currentSelectedSpace]
    if (!space) {
        space = project[currentSelectedSpace] = {}
    }

    let view = space[currentSelectedView]
    if (!view) {
        view = space[currentSelectedView] = {}
    }

    setLocalData('collapsedGroups', currentData)

    return view
}

function getGroupCollapsed(groupId) {
    return !!getViewGroupCollapsedData()[groupId];
}

function setGroupCollapsed(groupId, value) {
    const collapsedGroupData = getLocalData('collapsedGroups')
    const viewCollapsedData = getViewGroupCollapsedData(collapsedGroupData)
    viewCollapsedData[groupId] = value

    setLocalData('collapsedGroups', collapsedGroupData)

    updateGroupCollapsed(groupId)
}

function swapGroupCollapsed(groupId) {
    setGroupCollapsed(groupId, !getGroupCollapsed(groupId))
}

function updateGroupCollapsed(groupId) {
    const collapsed = getGroupCollapsed(groupId)

    for (const groupDiv of tasksContainer.querySelectorAll('.taskGroupContainer')) {
        const thisGroupId = groupDiv.getAttribute('group-id')
        if (thisGroupId === groupId.toString()) {
            groupDiv.setAttribute('collapsed', collapsed)
        }
    }
}

function updateGroupCounts() {
    for (const groupDiv of workspacePage.querySelectorAll('.taskGroupContainer')) {
        const content = groupDiv.querySelector('.taskGroupContainerContent')
        const countText = groupDiv.querySelector('.taskGroupContainerHeaderCount')
        countText.innerText = content.children.length - 1
    }
}

function updateGroup(index, group) {
    const expectId = 'taskGroupContainer' + index
    let existing = tasksContainer.querySelector("#" + expectId)

    if (!group) {
        if (existing) {
            tasksContainer.removeChild(existing)
        }
        return
    }
    if (!existing) {
        existing = document.createElement('div')
        existing.id = expectId
        existing.setAttribute('display-index', index)
        existing.className = "taskGroupContainer"

        let header = document.createElement('div')
        header.className = "taskGroupContainerHeader"

        let hdiv = document.createElement('div')

        const headerContainer = document.createElement('div')
        headerContainer.classList.add('taskGroupContainerHeaderContainer')

        let p = document.createElement('p')

        const count = document.createElement('div')
        count.classList.add('taskGroupContainerHeaderCount')

        const emptySpace = document.createElement('div')
        emptySpace.classList.add('taskGroupContainerHeaderEmptySpace')

        const collapse = createSvg('dropdownCollapse')
        collapse.classList.add('taskGroupContainerHeaderCollapse', 'taskGroupContainerHeaderIcon')

        let add = createSvg('add')
        add.classList.add('taskGroupContainerHeaderAdd', 'taskGroupContainerHeaderIcon')

        headerContainer.append(p, count, emptySpace, collapse, add)
        header.append(hdiv, headerContainer)

        let content = document.createElement('div')
        content.className = "taskGroupContainerContent"

        existing.append(header, content)
        tasksContainer.appendChild(existing)
    }

    existing.setAttribute('group-id', group.GroupId)

    if (document.body.parentElement.classList.contains('notDraggingTask')) {
        setNewTaskDivsVisible(true)
    }

    const header = existing.querySelector('.taskGroupContainerHeader')
    header.querySelector('p').innerText = group.Text;

    bindClick(header, function (event) {
        console.log(event.target)
        const target = event.target
        if (target.classList.contains('taskGroupContainerHeaderCollapse') || existing.getAttribute('collapsed') === 'true') {
            swapGroupCollapsed(group.GroupId)
        } else if (target.classList.contains('taskGroupContainerHeaderAdd')) {
            makeRipple(header, event)
            handleCreateTaskButton(group.GroupId)
        }
    })

    const groupColor = group.GetColor()
    existing.style.setProperty("--group-color", groupColor)

    existing.setAttribute('hideclose', (!!group.HideClose).toString())

    updateGroupCollapsed(group.GroupId)
}

function updateGroups() {
    const viewData = getSelectedViewData()

    if (!viewData) {
        for (const item of tasksContainer.querySelectorAll(".taskGroupContainer")) {
            updateGroup(parseInt(item.getAttribute('display-index')), false)
        }
    }

    if (!viewData) { return }

    const viewGroupIndex = viewData.group || 0

    workspacePage.setAttribute("groupMethod", viewGroupIndex)

    const groupMethods = CONST_GROUP_METHODS[viewGroupIndex]

    const groups = groupMethods.GetGroups(currentSelectedProject, getSelectedProjectData(), currentSelectedSpace, getSelectedSpaceData())
    const totalGroups = groups.length

    
    for (let i = 0; i < groups.length; i++) {
        updateGroup(i, groups[i])
    }

    
    for (const child of document.querySelectorAll(".taskGroupContainer")) {
        const index = parseInt(child.getAttribute("group-index"))
        if (index >= totalGroups) {
            updateGroup(index, false)
        }
    }

    
    workspacePage.setAttribute('showstatusbar', groupMethods.ShowStatusBar)

    const orderedStatuses = getOrderedStatuses(currentSelectedProject, currentSelectedSpace)
    workspacePage.style.setProperty('--closed-status-color', getStatusColor(getClosedStatus().id))

    refreshTasks()
    updateGroupCounts()
}

function refreshTasks() {
    for (const projectId in loadedTasks) {
        for (const spaceId in loadedTasks[projectId]) {
            for (const taskId in loadedTasks[projectId][spaceId].tasks) {
                updateTask(projectId, spaceId, taskId, loadedTasks[projectId][spaceId].tasks[taskId], true, true)
            }
        }
    }
}

function openTask(projectId, spaceId, taskId) {
    console.log(projectId, spaceId, taskId)
}

function getLocalCopyOfSpaceTaskData(projectId, spaceId) {
    const localCopy = {
        tasks: {}
    }
    const cachedTasks = getLocalData("cachedTasks", true, true)

    const projectTasks = cachedTasks && cachedTasks.items && cachedTasks.items[projectId]
    if (projectTasks) {
        const spaceTasks = projectTasks[spaceId]
        if (spaceTasks) {
            for (const taskId in spaceTasks.tasks) {
                const data = spaceTasks.tasks[taskId]
                if (data && Object.keys(data).length > 0) {
                    localCopy.tasks[taskId] = data
                }
            }
            localCopy.timestamp = spaceTasks.timestamp
        }
    }

    return localCopy
}

function saveLocalCopyOfTaskData(projectId, spaceId, taskId, newData) {
    const copiedData = deepCopy(newData)
    const saved = getLocalData("cachedTasks", true, true) || {
        items: {},
        count: 0,
    }

    let ref = saved.items

    if (!ref[projectId]) {
        ref[projectId] = {}
    }
    ref = ref[projectId]

    if (!ref[spaceId]) {
        ref[spaceId] = {
            tasks: {},
            timestamp: 0,
        }
    }
    ref = ref[spaceId]

    if (copiedData) {
        if (!ref[taskId]) {
            saved.count++
        }
        ref.tasks[taskId] = copiedData
    } else {
        delete ref.tasks[taskId]
        saved.count--
    }

    
    if (saved.count * (1 / 1024) <= getLocalDataSize() * 0.5) {
        ref.timestamp = Date.now()
        setLocalData("cachedTasks", saved, true)
    }

}

function loadTaskData(projectId, spaceId) {
    return new Promise((resolve => {
        if (!loadedTasks[projectId] || !loadedTasks[projectId][spaceId]) {
            checkLoadedTasksReady(projectId, spaceId)
            
            const localCopy = getLocalCopyOfSpaceTaskData(projectId, spaceId)
            const lastLoadedTimestamp = localCopy.timestamp
            for (const taskId in localCopy.tasks) {
                
                updateTask(projectId, spaceId, taskId, localCopy.tasks[taskId], false, true)
            }

            
            const taskDataRef = db.ref("/taskData/" + projectId + "/" + spaceId)

            
            const auditLogDeletedTasksPath = CONST_AUDIT_DATA.task.delete.getLocation({
                item: 'task',
                type: 'delete',
                projectId: projectId,
                spaceId: spaceId,
            })

            const auditLogDeletedTasksRef = db.ref(auditLogDeletedTasksPath)

            
            function handleSnapshot(snapshot, isDeletedAudit) {
                const data = snapshot.val()
                for (const id in data) {
                    if (!isDeletedAudit) {
                        updateTask(projectId, spaceId, id, data[id])
                    } else {
                        updateTask(projectId, spaceId, id, false)
                    }
                }
            }

            
            if (localCopy.timestamp > 0) {
                
                Promise.all([
                    taskDataRef.orderByChild('lastUpdatedAt').startAt(lastLoadedTimestamp - CONST_LOAD_OLD_DATA_FLUX).get(),
                    auditLogDeletedTasksRef.orderByChild('timestamp').startAt(lastLoadedTimestamp - CONST_LOAD_OLD_DATA_FLUX).get(),
                ]).then(([newTasksSnapshot, deletedTasksSnapshot]) => {
                    handleSnapshot(newTasksSnapshot)
                    handleSnapshot(deletedTasksSnapshot, true)
                    resolve()
                }).catch(handleError)
            } else {
                
                taskDataRef.get().then(newTasksSnapshot => {
                    handleSnapshot(newTasksSnapshot)
                    resolve()
                }).catch(handleError)
            }

            
            const newTaskDataRef = taskDataRef.orderByChild('lastUpdatedAt').startAt(Date.now() - CONST_LOAD_OLD_DATA_FLUX)
            newTaskDataRef.on("child_added", (data) => {
                updateTask(projectId, spaceId, data.key, data.val())
            })

            
            taskDataRef.on("child_changed", (data) => {
                updateTask(projectId, spaceId, data.key, data.val())
            })

            
            taskDataRef.on("child_removed", (data) => {
                updateTask(projectId, spaceId, data.key, null)
            })

            
            maid.push(function () {
                
                taskDataRef.off()
            })
        } else {
            resolve()
        }
    }))
}

function loadViewOrderData() {
    return new Promise(async (resolve) => {
        const ref = db.ref(`taskOrder/${currentSelectedProject}/${currentSelectedSpace}/${currentSelectedView}`)

        function handleUpdate(snapshot) {
            const key = snapshot.key
            if (snapshot.exists()) {
                const val = snapshot.val()
                setTaskOrder(key, val, true)
            } else {
                setTaskOrder(key, false, true)
            }
        }

        let largestKey = false

        const firstBatch = await ref.get()

        if (firstBatch.exists()) {
            firstBatch.forEach((item) => {
                
                largestKey = item.key

                handleUpdate(item)
            })
        }

        if (!largestKey) {
            ref.on('child_added', handleUpdate)
        } else {
            ref.orderByKey().startAfter(largestKey).on('child_added', handleUpdate)
        }
        ref.on('child_changed', handleUpdate)
        ref.on('child_removed', handleUpdate)

        resolve()
    })
}

function makeAuditData(data) {
    const auditData = CONST_AUDIT_DATA[data.item][data.type]

    let value = {
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        by: uId,
    }

    let items = [{
        Location: auditData.getLocation(data),
        Value: value,
    }]

    if (auditData.addExtraLocation) {
        auditData.addExtraLocation(items, data)
    }

    return items
}

function addAuditDataToUpdates(data, updates) {
    const auditData = makeAuditData(data)
    for (const update of auditData) {
        updates[update.Location] = update.Value
    }
}

function getNewTaskOrder(projectId, spaceId, options = {}) {
    const loadedData = loadedTasks[projectId][spaceId]
    const tasks = loadedData.tasks
    let maxOrder = 1
    for (const taskId in tasks) {
        if (taskId !== FAKE_NEW_ITEM_ID) {
            const order = getTaskOrder(taskId, true)
            if (order && order >= maxOrder) {
                maxOrder = order
            }
        }
    }

    return maxOrder + 1
}

function getNewTaskData(projectId, spaceId, groupId, initialData) {
    
    let newTaskData = {
        name: initialData.name,
        status: getDefaultStatus().id,
        creator: uId,
    }

    
    addRequiredTaskData(newTaskData)

    
    const viewData = getSelectedViewData()
    const groupIndex = viewData.group || 0
    CONST_GROUP_METHODS[groupIndex].SetTaskDataGroupId(newTaskData, parseInt(groupId))

    
    return newTaskData
}

function setNewTaskData(projectId, spaceId, groupId, initialData) {
    const loadedData = loadedTasks[projectId][spaceId]

    const newTaskData = getNewTaskData(projectId, spaceId, groupId, initialData)

    
    const taskId = generatePushID()
    const taskDataLoc = "taskData/" + projectId + "/" + spaceId + "/" + taskId

    const updates = {
        [taskDataLoc]: newTaskData,
        [getTaskOrderLoc(taskId)]: getNewTaskOrder(projectId, spaceId),
        [`projects/${currentSelectedProject}/spaces/${currentSelectedSpace}/count`]: loadedData.count + 1,
    }

    addAuditDataToUpdates({
        item: 'task',
        type: 'create',
        projectId: projectId,
        spaceId: spaceId,
        taskId: taskId
    }, updates)

    db.ref().update(updates).catch((error) => {
        updateTask(projectId, spaceId, taskId, false)
        handleError(error)
    })
}

function addRequiredTaskData(taskData, currentData) {
    taskData.lastUpdatedBy = uId
    taskData.lastUpdatedAt = firebase.database.ServerValue.TIMESTAMP

    if (!currentData || !currentData.createdAt) {
        taskData.createdAt = firebase.database.ServerValue.TIMESTAMP
    }
}

function updateTaskData(projectId, spaceId, taskId, newData) {
    let currentData = deepCopy(loadedTasks[projectId][spaceId].tasks[taskId]) || false

    if (newData) {
        addRequiredTaskData(newData, currentData)

        const combinedData = deepUpdate(currentData, newData)
        updateTask(projectId, spaceId, taskId, combinedData, false, false)

        const rootDir = `taskData/${projectId}/${spaceId}/${taskId}`

        const updates = {}

        
        const newOrder = getTaskOrder(taskId)
        if (taskOrderNative[projectId]?.[spaceId]?.[currentSelectedView]?.[taskId] !== newOrder) {
            updates[getTaskOrderLoc(taskId)] = newOrder
        }

        function recursiveUpdateCheck(item, path) {
            if (typeof item === 'object' && !nonObjectAllowList.includes(item)) {
                for (let key in item) {
                    recursiveUpdateCheck(item[key], path + '/' + key)
                }
            } else {
                updates[path] = item
            }
        }

        recursiveUpdateCheck(newData, rootDir)

        addAuditDataToUpdates({
            item: 'task',
            type: 'edit',
            projectId: projectId,
            spaceId: spaceId,
            taskId: taskId,
        }, updates)

        return new Promise(async (resolve) => {
            await db.ref().update(updates).catch((error) => {
                handleError(error)
                const originData = getLocalCopyOfSpaceTaskData(projectId, spaceId).tasks[taskId]
                updateTask(projectId, spaceId, taskId, originData, true)
            })
            resolve()
        })
    } else {
        return new Promise(async (resolve) => {
            removeTaskData(projectId, spaceId, taskId)
            resolve()
        })
    }
}

function updateSubtaskData(projectId, spaceId, taskId, subtaskId, newData) {
    if (!newData) {
        newData = null
    }

    return updateTaskData(projectId, spaceId, taskId, {
        subtasks: {
            [subtaskId]: newData
        }
    })
}

function removeTaskData(projectId, spaceId, taskId) {
    const taskDataLoc = 'taskData/' + projectId + "/" + spaceId + "/" + taskId

    const newCount = loadedTasks[projectId][spaceId].count - 1
    const updates = {
        [taskDataLoc]: null,
        [getTaskOrderLoc(taskId)]: null,
        [`projects/${projectId}/spaces/${spaceId}/count`]: newCount,
    }

    addAuditDataToUpdates({
        item: 'task',
        type: 'delete',
        projectId: projectId,
        spaceId: spaceId,
        taskId: taskId,
    }, updates)

    const previousData = loadedTasks[projectId][spaceId].tasks[taskId]
    db.ref().update(updates).catch((error) => {
        if (previousData) {
            updateTask(projectId, spaceId, taskId, previousData)
        }
        handleError(error)
    })
}

async function handleCreateTaskButton(groupId) {
    const fakeNewTaskData = getNewTaskData(currentSelectedProject, currentSelectedSpace, groupId, {
        name: '',
    })

    updateTask(currentSelectedProject, currentSelectedSpace, FAKE_NEW_ITEM_ID, fakeNewTaskData, true, true)

    handleRename({
        namespace: 'task',
        projectId: currentSelectedProject,
        spaceId: currentSelectedSpace,
        taskId: FAKE_NEW_ITEM_ID,
        overrideHandler: function (result) {
            updateTask(currentSelectedProject, currentSelectedSpace, FAKE_NEW_ITEM_ID, false)

            if (result) {
                setNewTaskData(currentSelectedProject, currentSelectedSpace, groupId, {
                    name: result.newName
                })

                if (!result.applyOrExit) {
                    handleCreateTaskButton(groupId)
                }
            }
        }
    })
}

function getNewSubtaskData(name) {
    return {
        name: name,
        status: getDefaultStatus().id
    }
}

function getTaskIdFromTaskDiv(task) {
    const id = task.getAttribute("taskid")
    return id !== FAKE_NEW_ITEM_ID && id
}

function handleEditTaskTitleButton(task) {
    const taskId = getTaskIdFromTaskDiv(task)

    if (taskId) {
        if (!task.querySelector(".inlineRenameInput")) {
            handleRename({
                namespace: 'task',
                projectId: currentSelectedProject,
                spaceId: currentSelectedSpace,
                taskId: taskId
            })
        }
    }
}

function handleRemoveTaskButton(task) {
    const taskId = getTaskIdFromTaskDiv(task)

    if (taskId) {
        removeTaskData(currentSelectedProject, currentSelectedSpace, taskId)
    }
}

function handleShowSubtaskButton(task) {
    const current = task.getAttribute('subtasks')

    if (!current) {
        task.setAttribute('subtasks', 'true')
    } else {
        task.removeAttribute('subtasks')
    }
}

async function handleCreateSubtaskButton(task) {
    const taskId = getTaskIdFromTaskDiv(task)

    if (taskId) {
        const tasks = loadedTasks[currentSelectedProject][currentSelectedSpace].tasks
        const taskData = deepCopy(tasks[taskId])
        if (!taskData.subtasks) {
            taskData.subtasks = {}
        }

        taskData.subtasks[FAKE_NEW_ITEM_ID] = getNewSubtaskData('')
        updateTask(currentSelectedProject, currentSelectedSpace, taskId, taskData, true, true)

        const computedStyle = window.getComputedStyle(task.querySelector('.taskSubtaskContainer'))
        if (computedStyle.display === 'none') {
            handleShowSubtaskButton(task)
        }

        handleRename({
            namespace: 'subtask',
            projectId: currentSelectedProject,
            spaceId: currentSelectedSpace,
            taskId: taskId,
            subtaskId: FAKE_NEW_ITEM_ID,
            overrideHandler: function (result) {
                const currentTask = deepCopy(tasks[taskId])
                delete currentTask.subtasks[FAKE_NEW_ITEM_ID]

                updateTask(currentSelectedProject, currentSelectedSpace, taskId, currentTask, true, true)

                if (result) {
                    const newSubtaskData = getNewSubtaskData(result.newName)
                    updateSubtaskData(currentSelectedProject, currentSelectedSpace, taskId, generatePushID(), newSubtaskData)

                    if (!result.applyOrExit) {
                        requestAnimationFrame(function () {
                            handleCreateSubtaskButton(task)
                        })
                    }
                }
            }
        })

    }
}

async function handleDateTaskButton(task) {
    const taskId = getTaskIdFromTaskDiv(task)

    if (taskId) {
        let dateFormat = userSettings.dateFormat

        let placeholder = 'M/D/Y'
        if (dateFormat === 2) {
            placeholder = 'D/M/Y'
        }

        function getValidDate(text) {
            text.replaceAll("-", '/')
            text.replaceAll(" ", '/')

            const items = text.split('/')

            if (items.length >= 2 && items.length <= 3) {
                const month = parseInt(dateFormat === 2 ? items[1] : items[0])
                const day = parseInt(dateFormat === 2 ? items[0] : items[1])
                let year = parseInt(items[2] || (new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date())))

                if (year < 100) {
                    year += 2000
                }

                if (day && month && year) {
                    if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1990) {
                        return new Date(year, month - 1, day)
                    }
                }
            }
        }

        const response = await showPrompt({
            Header: "Enter Date",
            Content: "Enter a due date:",
            ConfirmText: "Set Date",
            CancelText: "Cancel",
            ShowInput: 1,
            InputOptions: {
                placeholder: placeholder
            },
            ValidateInput: function (text) {
                return !!getValidDate(text)
            }
        })

        if (response) {
            const date = getValidDate(response[0])
            updateTaskData(currentSelectedProject, currentSelectedSpace, taskId, {
                dueDate: date.getTime()
            })
        }
    }
}

function handleDateInfoTaskButton(task) {
    const taskId = getTaskIdFromTaskDiv(task)

    if (taskId) {
        showMenu({
            Header: 'Edit Due Date',
            Source: task.querySelector('.taskDateInfo'),
            Items: [
                {
                    Icon: svg('pencil'),
                    Text: 'Edit',
                    Handler: function () {
                        closeMenu()
                        handleDateTaskButton(task)
                    }
                },
                {
                    Icon: svg('close'),
                    IconColor: getColorString(CONST_DELETE_COLOR, true),
                    Text: 'Remove',
                    Handler: function () {
                        closeMenu()
                        updateTaskData(currentSelectedProject, currentSelectedSpace, taskId, {
                            dueDate: null,
                        })
                    }
                },
            ]
        })
    }
}

function handleEditSubtaskTitleButton(subtask) {
    const taskId = getTaskIdFromTaskDiv(subtask.parentElement.parentElement)
    const subtaskId = subtask.getAttribute("subtaskid")

    if (taskId && subtaskId) {
        if (!subtask.querySelector(".inlineRenameInput")) {
            handleRename({
                namespace: 'subtask',
                projectId: currentSelectedProject,
                spaceId: currentSelectedSpace,
                taskId: taskId,
                subtaskId: subtaskId,
            })
        }
    }
}

function handleOptionsTaskButton(task) {
    const taskId = getTaskIdFromTaskDiv(task)

    if (taskId) {
        const optionsButton = task.querySelector(".taskOptionsButton")

        const closedStatus = getClosedStatus()

        const data = {
            Header: "Task Options",
            Source: optionsButton,
            Items: [
                {
                    Text: "Create Subtask",
                    Icon: svg("subtaskAdd"),
                    Handler: function () {
                        closeMenu()
                        handleCreateSubtaskButton(task)
                    }
                },
                {
                    Text: "Change Status",
                    Icon: svg("status"),
                    Handler: function () {
                        closeMenu()
                        handleChangeTaskStatusButton(task)
                    }
                },
                {
                    Text: closedStatus.name,
                    Icon: svg("check"),
                    IconColor: getStatusColor(closedStatus.id),
                    Handler: function () {
                        closeMenu()
                        handleCloseTaskButton(task)
                    }
                },
                {
                    Text: "Rename",
                    Icon: svg("pencil"),
                    ShowHeaderIcon: true,
                    Handler: function () {
                        closeMenu()
                        handleEditTaskTitleButton(task)
                    },
                },
                {
                    Text: "Delete",
                    Icon: svg("delete"),
                    IconColor: getColorString(CONST_DELETE_COLOR, true),
                    ShowHeaderIcon: true,
                    Handler: function () {
                        closeMenu()
                        handleRemoveTaskButton(task)
                    }
                },
            ]
        }

        const style = window.getComputedStyle(task.querySelector('.taskTray'))
        const transform = style.transform

        if (transform.startsWith('matrix(')) {
            const items = transform.substring('matrix('.length, transform.length - 1).split(', ')
            const yTransform = parseFloat(items[5])

            if (yTransform !== 0) {
                data.OffsetY = -yTransform
            }
        }

        showMenu(data)
    }
}

function handleChangeTaskStatusButton(task, options) {
    const taskId = getTaskIdFromTaskDiv(task)
    const subtaskId = options && options.subtask ? options.subtask.getAttribute('subtaskid') : null
    let data

    if (!subtaskId) {
        data = deepCopy(loadedTasks[currentSelectedProject][currentSelectedSpace].tasks[taskId])
    } else {
        data = deepCopy(loadedTasks[currentSelectedProject][currentSelectedSpace].tasks[taskId].subtasks[subtaskId])
    }

    if (data) {
        const orderedStatuses = getOrderedStatuses(currentSelectedProject, currentSelectedSpace)
        let currentIndex = 0

        for (let i = 0; i < orderedStatuses.length; i++) {
            const status = orderedStatuses[i]
            if (status.id === data.status) {
                currentIndex = i
                break
            }
        }

        const previousIndex = currentIndex

        function updateToNewStatus(id) {
            const newData = {
                status: id
            }

            if (!subtaskId) {
                updateTaskData(currentSelectedProject, currentSelectedSpace, taskId, newData)
            } else {
                updateSubtaskData(currentSelectedProject, currentSelectedSpace, taskId, subtaskId, newData)
            }

        }

        function updateToNewIndex() {
            if (previousIndex !== currentIndex) {
                const newStatus = orderedStatuses[currentIndex].id
                updateToNewStatus(newStatus)
            }
        }

        let nextIndex = currentIndex + 1

        if (nextIndex >= orderedStatuses.length) {
            nextIndex = 0
        }

        if (!options) {
            options = {}
        }

        if (options.close) {
            currentIndex = orderedStatuses.length - 1
            updateToNewIndex()
        } else {
            let source = !subtaskId ? task.querySelector('.taskStatusBar') : options.subtask.querySelector('.taskStatusBar')

            function customIconGenerator(color) {
                const customIcon = document.createElement('div')
                customIcon.style.borderRadius = '25%'
                customIcon.style.backgroundColor = color

                return customIcon
            }

            const items = [
                {
                    Icon: svg('next'),
                    IconColor: getStatusColor(orderedStatuses[nextIndex].id),
                    Text: 'Next: ' + orderedStatuses[nextIndex].name,
                    OnlyShowHeaderIcon: true,
                    Handler: function () {
                        closeMenu()
                        currentIndex = nextIndex
                        updateToNewIndex()
                    }
                },
                {
                    Icon: svg('check'),
                    IconColor: getStatusColor(getClosedStatus().id),
                    Text: orderedStatuses[orderedStatuses.length - 1].name,
                    OnlyShowHeaderIcon: true,
                    Handler: function () {
                        closeMenu()
                        if (!subtaskId) {
                            handleCloseTaskButton(task)
                        } else {
                            handleChangeSubtaskStatusButton(options.subtask, {
                                close: true,
                            })
                        }
                    }
                },
            ]

            for (const status of orderedStatuses) {
                if (status.id === data.status.id) {
                    continue;
                }

                items.push({
                    CustomIconGenerator: customIconGenerator,
                    IconColor: getStatusColor(status.id),
                    Text: status.name,
                    Handler: function () {
                        closeMenu()
                        updateToNewStatus(status.id)
                    }
                })
            }

            showMenu({
                Header: 'Change status',
                Source: source,
                EnableMaxHeight: true,
                Items: items
            })
            
            updateToNewIndex()
        }
    }
}

function handleChangeSubtaskStatusButton(subtask, options) {
    const task = subtask.parentElement.parentElement

    if (!options) {
        options = {}
    }

    options.subtask = subtask
    handleChangeTaskStatusButton(task, options)
}

function handleCloseTaskButton(task) {
    handleChangeTaskStatusButton(task, {
        close: true,
    })
}

function getTaskOrderLoc(taskId) {
    return `taskOrder/${currentSelectedProject}/${currentSelectedSpace}/${currentSelectedView}/${taskId}`
}

function getTaskOrderForCurrentView(isNative) {
    const root = isNative ? taskOrderNative : taskOrder

    let project = root[currentSelectedProject]
    if (!project) {
        project = root[currentSelectedProject] = {}
    }

    let space = project[currentSelectedSpace]
    if (!space) {
        space = project[currentSelectedSpace] = {}
    }

    let view = space[currentSelectedView]
    if (!view) {
        view = space[currentSelectedView] = {}
    }

    return view
}

function getTaskOrder(taskId, allowUndefined) {
    const viewTaskOrderData = getTaskOrderForCurrentView()
    let value = viewTaskOrderData[taskId]

    if (!value && !allowUndefined) {
        const newValue = getNewTaskOrder(currentSelectedProject, currentSelectedSpace)
        setTaskOrder(taskId, newValue)

        value = newValue
    }

    return value;
}

function setTaskOrder(taskId, newOrder, isNative) {
    const viewTaskOrderData = getTaskOrderForCurrentView()
    if (newOrder || newOrder === 0) {
        viewTaskOrderData[taskId] = newOrder

        if (isNative) {
            const nativeData = getTaskOrderForCurrentView(true)
            nativeData[taskId] = newOrder
        }
    } else {
        delete viewTaskOrderData[taskId]

        if (isNative) {
            const nativeData = getTaskOrderForCurrentView(true)
            delete nativeData[taskId]
        }
    }
}

function getTaskOrderFromElement(element) {
    const id = element.getAttribute('taskid')
    return getTaskOrderForCurrentView()[id]
}

function getTaskDataFromElement(element) {
    const tasks = loadedTasks[currentSelectedProject][currentSelectedSpace].tasks
    const id = element.getAttribute('taskid')
    return tasks[id]
}

function sortTaskAGoesBeforeB(taskAElement, taskBElement) {
    const taskAId = taskAElement.getAttribute('taskid')
    const taskBId = taskBElement.getAttribute('taskid')

    const viewData = getSelectedViewData()

    if (!viewData) { return }

    const sortMethod = CONST_SORT_METHODS[viewData.order || 0].Method

    const taskAData = getTaskDataFromElement(taskAElement)
    const taskBData = getTaskDataFromElement(taskBElement)

    if (!taskAData || !taskBData) { return }

    return taskBId === FAKE_NEW_ITEM_ID || sortMethod(taskAId, taskAData, taskBId, taskBData);
}

function checkLoadedTasksReady(projectId, spaceId) {
    if (!loadedTasks) {
        loadedTasks = {}
    }

    if (!loadedTasks[projectId]) {
        loadedTasks[projectId] = {}
    }

    if (!loadedTasks[projectId][spaceId]) {
        loadedTasks[projectId][spaceId] = {
            tasks: {},
            count: 0,
        }
    }
}

function convertTaskToNewFormat(projectId, spaceId, taskId, newData) {
    if (!workspacePage.getAttribute('edit')) {
        return
    }

    let mustUpdate = false

    if (newData && newData.name) {
        if (!newData.lastUpdatedAt) {
            mustUpdate = true
        }
        if (newData.subtasks) {
            for (const id in newData.subtasks) {
                const subtask = newData.subtasks[id]
                if (subtask.status === undefined) {
                    subtask.status = newData.status
                    mustUpdate = true
                }
            }
        }
        if (newData.order !== undefined && newData.order !== null) {
            mustUpdate = true
            setTaskOrder(taskId, newData.order)
            newData.order = null
        }
    }
    if (mustUpdate) {
        updateTaskData(projectId, spaceId, taskId, newData)
    }
}

function makeTaskTray() {
    const trayContainer = document.createElement('div')
    trayContainer.classList.add('taskTrayContainer')

    const tray = document.createElement('div')
    tray.classList.add('taskTray')

    const trayLeft = document.createElement('div')
    trayLeft.classList.add('taskTrayLeft')

    const subtaskButton = document.createElement('div')
    subtaskButton.append(createSvg('subtaskAdd'))
    subtaskButton.classList.add('taskSubtaskButton', 'taskTrayIcon')

    const dateButton = document.createElement('div')
    dateButton.append(createSvg('date'))
    dateButton.classList.add('taskDateButton', 'taskTrayIcon')

    const trayRight = document.createElement('div')
    trayRight.classList.add('taskTrayRight')

    const closeButton = document.createElement('div')
    closeButton.append(createSvg('check'))
    closeButton.classList.add('taskCloseButton', 'taskTrayIcon')

    const options = document.createElement('div')
    options.append(createSvg('options'))
    options.classList.add('taskOptionsButton', 'taskTrayIcon')

    for (const item of [trayContainer, tray, trayLeft, trayRight]) {
        item.setAttribute('continuehasmenu', 'true')
    }

    trayLeft.append(subtaskButton, dateButton)
    trayRight.append(closeButton, options)
    tray.append(trayLeft, trayRight)
    trayContainer.append(tray)

    return trayContainer
}

function makeBaseTaskDiv(taskId) {
    const taskContainer = document.createElement("div")
    taskContainer.classList.add("taskDivContainer")
    taskContainer.id = "task_" + taskId;
    taskContainer.setAttribute('taskid', taskId)

    const taskDiv = document.createElement('div')
    taskDiv.classList.add("taskDiv")

    const titleContainer = document.createElement("div")
    titleContainer.classList.add('taskTitleContainer')

    const title = document.createElement("div")
    title.classList.add('taskTitle')

    const titleText = document.createElement("p")
    titleText.classList.add('taskTitleText')

    const titleEdit = document.createElement('div')
    titleEdit.classList.add('taskEdit', 'taskTitleEdit')
    titleEdit.append(createSvg('pencil'))

    for (const item of [titleText, titleContainer, taskDiv]) {
        item.setAttribute('continueinlinerename', 'true')
    }

    title.append(titleText, titleEdit)
    titleContainer.append(title)

    const taskStatusBar = document.createElement('div')
    taskStatusBar.classList.add('taskStatusBar')

    taskDiv.append(titleContainer, taskStatusBar)
    taskContainer.append(taskDiv)


    return taskContainer
}

function createTaskDiv(projectId, spaceId, taskId, tasks) {
    const taskButtons = {
        '.taskSubtaskButton': {
            Handler: handleCreateSubtaskButton,
        },
        '.taskDateButton': {
            Handler: handleDateTaskButton,
        },
        '.taskDateInfo': {
            Handler: handleDateInfoTaskButton,
        },

        '.taskOptionsButton': {
            Handler: handleOptionsTaskButton,
        },
        '.taskCloseButton': {
            Handler: handleCloseTaskButton,
        },

        '.taskTitleEdit': {
            IsRoot: true,
            Handler: handleEditTaskTitleButton,
        },

        '.taskSubtaskShowMain': {
            IsRoot: true,
            Handler: handleShowSubtaskButton,
        },
        '.taskSubtaskShowAdd': {
            IsRoot: true,
            Handler: handleCreateSubtaskButton,
        },

        '.taskStatusBar': {
            IsRoot: true,
            Handler: handleChangeTaskStatusButton,
        }
    }

    const subtaskButtons = {
        '.taskTitleEdit': {
            IsRoot: true,
            Handler: handleEditSubtaskTitleButton,
        },
        '.taskStatusBar': {
            IsRoot: true,
            Handler: handleChangeSubtaskStatusButton,
        }
    }

    let existing = makeBaseTaskDiv(taskId)
    const taskDiv = existing.querySelector(".taskDiv")

    const taskInfoContainer = document.createElement('div')
    taskInfoContainer.classList.add('taskInfoContainer')

    const taskSubtaskShow = document.createElement('div')
    taskSubtaskShow.classList.add('taskSubtaskShow')

    const taskSubtaskShowMain = document.createElement('div')
    taskSubtaskShowMain.classList.add('taskSubtaskShowMain')

    const taskSubtaskShowIcon = createSvg('subtask')

    const taskSubtaskShowText = document.createElement('div')
    taskSubtaskShowText.classList.add('taskButtonText')

    taskSubtaskShowMain.append(taskSubtaskShowIcon, taskSubtaskShowText)

    const taskSubtaskShowAdd = document.createElement('div')
    taskSubtaskShowAdd.classList.add('taskSubtaskShowAdd')

    const taskSubtaskShowAddIcon = createSvg('add')
    taskSubtaskShowAddIcon.classList.add('taskSubtaskShowAddIcon')

    taskSubtaskShowAdd.append(taskSubtaskShowAddIcon)

    taskSubtaskShow.append(taskSubtaskShowMain, taskSubtaskShowAdd)

    const taskDateInfo = document.createElement('div')
    taskDateInfo.classList.add('taskDateInfo')

    taskInfoContainer.append(taskSubtaskShow, taskDateInfo)

    taskDiv.append(taskInfoContainer)

    const subtaskContainer = document.createElement("div")
    subtaskContainer.classList.add('taskSubtaskContainer')

    const tray = makeTaskTray()
    const actualTray = tray.querySelector('.taskTray')

    bindRightClick(existing, function (event) {
        if (!workspacePage.getAttribute('edit')) {
            return
        }
        event.preventDefault()
        taskButtons['.taskOptionsButton'].Handler(existing)
    })

    let offsetX, offsetY
    let startX, startY
    let currentX, currentY
    let copy
    let updated
    let originalTaskData
    let originalOrder
    let buttonData = null

    function handleMouseMove(event) {
        if (!workspacePage.getAttribute('edit')) {
            return
        }
        currentX = event.clientX
        currentY = event.clientY

        if (!copy) {
            if (!dragContainer.parentElement) {
                document.body.append(dragContainer)

                for (const atr of ['showstatusbar', 'groupmethod']) {
                    dragContainer.setAttribute(atr, workspacePage.getAttribute(atr))
                }
            }

            copy = existing.cloneNode(true)
            copy.id = 'copiedTask'
            existing.style.opacity = '0.5'

            let toCopy = ['padding', 'borderRadius', 'width', 'height', 'boxShadow']
            const copyIfDeep = ['margin']

            function copyPropertiesToRecursive(to, from, isDeep) {
                let style = window.getComputedStyle(from)
                for (const key in style) {
                    if (toCopy.includes(key) || (isDeep && copyIfDeep.includes(key))) {
                        to.style[key] = style[key]
                    }
                }

                for (let i = 0; i < from.children.length; i++) {
                    copyPropertiesToRecursive(to.children[i], from.children[i], true)
                }
            }

            copyPropertiesToRecursive(copy, existing)

            const style = window.getComputedStyle(existing)
            copy.querySelector('.taskTray').style.boxShadow = 'none'

            for (const prop of ['--border-radius', '--item-shadow']) {
                copy.style.setProperty(prop, style.getPropertyValue(prop))
            }

            copy.style.position = 'absolute'
            copy.style.pointerEvents = 'none'

            dragContainer.append(copy)
        }

        if (document.activeElement) {
            if (document.activeElement.blur) {
                document.activeElement.blur()
            }
        }

        let ripple = copy.querySelector('.blocker')
        if (ripple && ripple.parentElement === copy) {
            copy.removeChild(ripple)
        }

        copy.style.left = `calc(${currentX - offsetX}px)`
        copy.style.top = `calc(${currentY - offsetY}px)`

        const viewData = getSelectedViewData()
        const hasOrder = !viewData.order || viewData.order === 0

        let inGroup = null
        let atOrder = null

        function getRealBounds(task) {
            let taskBounds = task.getBoundingClientRect()
            const fluxFactor = 0.5 
            const bottomMargin = parseFloat(window.getComputedStyle(task).marginBottom) * fluxFactor
            taskBounds.height += bottomMargin
            taskBounds.top -= (bottomMargin / 2)

            return taskBounds
        }

        const existingBounds = getRealBounds(existing)

        for (const container of workspacePage.querySelectorAll('.taskGroupContainer')) {
            if (container.getAttribute('collapsed') === 'true') {
                continue
            }

            let containerBounds = container.getBoundingClientRect()
            if (currentX >= containerBounds.left && currentX <= containerBounds.left + containerBounds.width) {
                inGroup = parseInt(container.getAttribute('group-id'))

                if (hasOrder) {
                    const content = container.querySelector('.taskGroupContainerContent')
                    let foundSelf = false
                    for (const task of content.querySelectorAll(".taskDivContainer")) {
                        let taskBounds = getRealBounds(task)

                        if (task === existing) {
                            foundSelf = true
                            continue
                        }

                        if (currentY >= taskBounds.top && currentY <= taskBounds.top + taskBounds.height) {

                            const taskBefore = task.previousElementSibling
                            const taskAfter = task.nextElementSibling

                            let placeAfter
                            let placeBefore

                            if (taskBounds.height > existingBounds.height * 1.05) { 
                                
                                const inTopHalf = currentY <= (taskBounds.top + ((taskBounds.height / 2)))
                                if (inTopHalf) {
                                    placeBefore = task
                                    if (taskBefore !== existing) {
                                        placeAfter = taskBefore
                                    } else {
                                        break
                                    }
                                } else {
                                    placeAfter = task
                                    if (taskAfter !== existing) {
                                        placeBefore = taskAfter
                                    } else {
                                        break
                                    }
                                }
                            } else {
                                if (!foundSelf) {
                                    placeBefore = task
                                    if (taskBefore !== existing) {
                                        placeAfter = taskBefore
                                    } else {
                                        break
                                    }
                                } else {
                                    placeAfter = task
                                    if (taskAfter !== existing) {
                                        placeBefore = taskAfter
                                    } else {
                                        break
                                    }
                                }
                            }

                            let placeBeforeOrder = null
                            let placeAfterOrder = null
                            if (placeBefore && !placeBefore.classList.contains("createTaskDiv")) {
                                placeBeforeOrder = placeBefore && (getTaskOrderFromElement(placeBefore) || 0)
                            }
                            if (placeAfter) {
                                placeAfterOrder = placeAfter && (getTaskOrderFromElement(placeAfter) || 0)
                            }

                            if (placeBeforeOrder === null && placeAfterOrder !== null) {
                                atOrder = placeAfterOrder + 1
                            } else if (placeBeforeOrder !== null && placeAfterOrder === null) {
                                atOrder = placeBeforeOrder - 1
                            } else if (placeBeforeOrder !== null && placeAfterOrder !== null) {
                                atOrder = (placeBeforeOrder + placeAfterOrder) / 2
                            }

                            break
                        }
                    }

                    if (content.firstElementChild.classList.contains("createTaskDiv") && content.lastElementChild.classList.contains("createTaskDiv")) {
                        atOrder = 1
                    }

                    if (atOrder === null) {
                        let firstElement = content.firstChild
                        if (firstElement) {
                            let firstBounds = firstElement.getBoundingClientRect()
                            if (currentY <= firstBounds.top && firstElement !== existing) {
                                const order = getTaskOrderFromElement(firstElement)
                                if (order) {
                                    atOrder = (order || 0) - 1
                                }
                            } else {
                                let lastElement = content.lastChild && content.lastChild.previousSibling
                                if (lastElement) {
                                    let lastBounds = lastElement.getBoundingClientRect()
                                    if (currentY >= lastBounds.top + lastBounds.height && lastElement !== existing) {
                                        const order = getTaskOrderFromElement(firstElement)
                                        if (order) {
                                            atOrder = (order || 0) + 1
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                break
            }
        }

        const currentData = deepCopy(tasks[taskId])
        if (!currentData) {
            doCleanup()
            return;
        }

        const groupMethods = CONST_GROUP_METHODS[viewData.group || 0]
        const currentGroup = groupMethods.GetGroupIdFromTaskData(currentData)
        let doUpdate = false
        let forceUpdate = false
        if (currentGroup !== inGroup && inGroup !== null) {
            groupMethods.SetTaskDataGroupId(currentData, inGroup)
            doUpdate = true
        }

        if (hasOrder && getTaskOrder(taskId) !== atOrder && atOrder !== null) {
            setTaskOrder(taskId, atOrder)
            doUpdate = true
            forceUpdate = true
        }

        if (doUpdate) {
            updated = true
            updateTask(projectId, spaceId, taskId, currentData, forceUpdate, true)
        }
    }

    let scrollCallN = 1

    function handleMouseScroll(event, thisN, recursionCount) {
        if (startX === null || startX === undefined || (thisN && scrollCallN !== thisN)) {
            return
        }

        handleMouseMove(event)

        scrollCallN++;
        thisN = scrollCallN

        if (!recursionCount) {
            recursionCount = 0
        }

        if (recursionCount < 10) {
            requestAnimationFrame(function () {
                handleMouseScroll(event, thisN, recursionCount + 1)
            })
        }
    }

    function doCleanup() {
        setNewTaskDivsVisible(true)
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('onwheel', handleMouseScroll)
        document.removeEventListener('mouseup', handleMouseUp)
        existing.style.opacity = '1'
        cleanup(dragContainer)
        cleanup(copy)
        copy = null
        document.body.parentElement.classList.add('notDraggingTask')
        startX = startY = currentX = currentY = null
    }

    function handleMouseUp(event) {
        if (buttonData !== null) {
            handleSelectedTaskButton(event, true)
        } else {
            handleMouseMove(event)
            const permissions = getPermissions(projectId, spaceId)
            if (permissions.EditTasks && (Math.abs(currentX - startX) > 1 || Math.abs(currentY - startY) > 1)) {
                if (updated) {
                    if (!deepCompare(tasks[taskId], originalTaskData) || originalOrder !== getTaskOrder(taskId)) {
                        
                        updateTaskData(projectId, spaceId, taskId, tasks[taskId])
                    }
                }
            } else {
                if (isEventInBounds(event, existing.getBoundingClientRect())) {
                    makeRipple(existing, event)
                    openTask(projectId, spaceId, taskId)
                }
            }
        }

        doCleanup()
    }

    const dragContainer = document.createElement('div')
    dragContainer.className = 'blocker'

    function cleanup(item) {
        if (item && item.parentElement) {
            item.parentElement.removeChild(item)
        }
    }

    function isEventInBounds(event, bounds) {
        return event.clientX >= bounds.left && event.clientX <= bounds.left + bounds.width &&
            event.clientY >= bounds.top && event.clientY <= bounds.top + bounds.height
    }

    function getAdjustedBounds(bounds) {
        const transformed = window.getComputedStyle(actualTray).transform.toString()
        const yOffset = parseFloat(transformed.split(")").splice(0, 1)[0].split(", ")[5]) || 0
        
        bounds.top -= yOffset
        return bounds
    }

    function handleSelectedTaskButton(event, runHandler) {
        for (const selector in taskButtons) {
            const item = taskButtons[selector]
            const button = actualTray.querySelector(selector) || existing.querySelector(selector)
            let itemBounds = button.getBoundingClientRect()
            if (!item.IsRoot) {
                itemBounds = getAdjustedBounds(itemBounds)
            }

            
            if (isEventInBounds(event, itemBounds)) {
                if (!runHandler) {
                    buttonData = item
                    document.addEventListener('mouseup', handleMouseUp)
                } else {
                    item.Handler(existing)
                }
                return true;
            }
        }

        for (const selector in subtaskButtons) {
            const item = subtaskButtons[selector]
            const subtaskContainer = existing.querySelector('.taskSubtaskContainer')
            for (const subtask of subtaskContainer.querySelectorAll('.taskDiv')) {
                const button = subtask.querySelector(selector)
                const itemBounds = button.getBoundingClientRect()

                
                if (isEventInBounds(event, itemBounds)) {
                    if (!runHandler) {
                        buttonData = item
                        document.addEventListener('mouseup', handleMouseUp)
                    } else {
                        item.Handler(subtask)
                    }
                    return true;
                }
            }
        }

        return false;
    }

    function handleMouseDown(event) {
        const canEdit = workspacePage.getAttribute('edit')

        startX = currentX = event.clientX
        startY = currentY = event.clientY
        buttonData = null

        let bounds = existing.getBoundingClientRect()
        offsetX = startX - bounds.left
        offsetY = startY - bounds.top


        if (event.button === 0) {
            if (canEdit) {
                const inButton = handleSelectedTaskButton(event)
                if (inButton) {
                    return
                }
            }

            if (existing.querySelector(".inlineRenameInput")) {
                return;
            }

            if (canEdit) {
                document.body.parentElement.classList.remove('notDraggingTask')
            }

            event.preventDefault()
            setNewTaskDivsVisible(false)
            cleanup(dragContainer)

            originalTaskData = deepCopy(tasks[taskId])

            const permissions = getPermissions(projectId, spaceId)
            if (permissions.EditTasks) {
                originalOrder = getTaskOrder(taskId)
                document.addEventListener('mousemove', handleMouseMove)
                document.addEventListener('wheel', handleMouseScroll)
            }
            document.addEventListener('mouseup', handleMouseUp)
        }
    }

    existing.onmousedown = handleMouseDown

    taskDiv.append(tray)
    existing.append(subtaskContainer)

    return existing;
}

function createSubtaskDiv(subtaskId, data) {
    const subtaskDiv = makeBaseTaskDiv('').querySelector('.taskDiv')
    subtaskDiv.id = "subtask_" + subtaskId
    subtaskDiv.setAttribute('subtaskid', subtaskId)

    return subtaskDiv
}

function updateSubtask(taskDiv, subtaskId, data) {
    const subtaskContainer = taskDiv.querySelector(".taskSubtaskContainer")
    let existing = subtaskContainer.querySelector("#subtask_" + subtaskId)

    if (!data) {
        if (existing) {
            subtaskContainer.removeChild(existing)
        }
        return
    }

    if (!existing) {
        existing = createSubtaskDiv(subtaskId, data)
    }

    let found = false
    if (subtaskId !== FAKE_NEW_ITEM_ID) {
        for (const item of subtaskContainer.children) {
            if (item === existing) {
                continue
            }
            const itemSubtaskId = item.getAttribute('subtaskid')
            if (itemSubtaskId > subtaskId || itemSubtaskId === FAKE_NEW_ITEM_ID) {
                subtaskContainer.insertBefore(existing, item)
            }
        }
    }

    if (!found) {
        subtaskContainer.append(existing)
    }

    existing.querySelector('.taskTitleText').innerText = data.name
    existing.style.setProperty('--task-status-color', getStatusColor(data.status))
}

function updateTask(projectId, spaceId, taskId, newData, forceUpdate, doNotResave) {
    checkLoadedTasksReady(projectId, spaceId, taskId)

    const isLoaded = currentSelectedProject === projectId && currentSelectedSpace === spaceId
    const taskData = loadedTasks[projectId][spaceId]
    const tasks = loadedTasks[projectId][spaceId].tasks
    const previousData = tasks[taskId]
    tasks[taskId] = newData
    const hasChanged = !deepCompare(previousData, newData) || forceUpdate

    if (hasChanged && !doNotResave) {
        saveLocalCopyOfTaskData(projectId, spaceId, taskId, newData)
    }

    let existing = tasksContainer.querySelector("#task_" + taskId)

    if (!newData) {
        delete tasks[taskId]
        if (isLoaded) {
            taskData.count--;
            if (existing) {
                existing.parentElement.removeChild(existing)
            }
        }

        updateGroupCounts()
        return
    }

    
    convertTaskToNewFormat(projectId, spaceId, taskId, newData)

    if (isLoaded) {
        if (existing && !hasChanged) {
            return
        }

        if (!existing) {
            existing = createTaskDiv(projectId, spaceId, taskId, tasks);
        }

        let currentParent = existing.parentElement

        let newParent = getLocationForGroupId(getGroupIdFromTaskData(newData))

        const orderString = existing.getAttribute('taskorder')

        const newOrder = getTaskOrder(taskId)

        function testInsertNewPosition() {
            let found
            for (const child of newParent.children) {
                if (sortTaskAGoesBeforeB(existing, child)) {
                    newParent.insertBefore(existing, child)
                    return true
                }
            }

            if (!found) {
                const createTaskDiv = newParent.querySelector('.createTaskDiv')
                if (createTaskDiv) {
                    newParent.insertBefore(existing, createTaskDiv)
                } else {
                    newParent.appendChild(existing)
                }
                return true
            }
        }

        if (newParent) {
            testInsertNewPosition()
        } else if (currentParent) {
            currentParent.removeChild(existing)
        }

        existing.setAttribute('taskorder', newOrder)

        const statusColor = getStatusColor(newData.status)
        existing.style.setProperty('--task-status-color', statusColor)

        let titleText = existing.querySelector(".taskTitleText")
        titleText.innerText = newData.name;

        let dateText = existing.querySelector('.taskDateInfo')
        if (newData.dueDate) {
            dateText.style.display = ''
            dateText.innerText = getFormattedDate(newData.dueDate)
        } else {
            dateText.style.display = 'none'
        }

        let subtaskContainer = existing.querySelector(".taskSubtaskContainer")

        const subtasksChanged = !deepCompare(previousData && previousData.subtasks, newData.subtasks, [FAKE_NEW_ITEM_ID]) || forceUpdate

        if (subtasksChanged || (previousData && previousData.subtasks && !previousData.subtasks[FAKE_NEW_ITEM_ID]) && newData.subtasks[FAKE_NEW_ITEM_ID]) {
            let subtaskCount = 0
            let subtaskData = newData.subtasks
            if (subtaskData) {
                for (let id in subtaskData) {
                    subtaskCount++
                    const data = subtaskData[id]
                    updateSubtask(existing, id, data)
                }
            }

            for (const child of subtaskContainer.children) {
                const thisId = child.getAttribute('subtaskid')
                if (!subtaskData || !subtaskData[thisId]) {
                    updateSubtask(existing, thisId, false)
                }
            }

            const subtaskShow = existing.querySelector('.taskSubtaskShow')
            const subtaskShowText = subtaskShow.querySelector('.taskButtonText')

            subtaskShowText.innerText = subtaskCount.toString()
            if (subtaskCount > 0) {
                subtaskShow.setAttribute('hascontents', 'true')
            } else {
                subtaskShow.removeAttribute('hascontents')
            }
        }

        if (!previousData) {
            taskData.count++;
        }

        updateGroupCounts()
    }
}

function clearLoadedTasks() {
    while (tasksContainer.firstChild) {
        tasksContainer.removeChild(tasksContainer.firstChild)
    }
}

function handleCollapseButton(button, instant, doNotSet) {
    const rightNow = getLocalData('sidebar-collapsed')
    let collapsed = rightNow

    if (!doNotSet) {
        collapsed = !rightNow
    }

    setLocalData("sidebar-collapsed", collapsed)

    if (collapsed) {
        document.body.classList.add("sidebarCollapsed")
    } else {
        document.body.classList.remove("sidebarCollapsed")
    }

    button.style.setProperty("--scale", collapsed ? '1' : '-1')
    button.style.setProperty("--translate", collapsed ? '3rem' : '')

    const settings = processAnimationOptions({
        duration: instant ? 0 : 200,
        fill: 'forwards',
    })

    let sidebar = document.getElementById('sidebar')

    const openStyle = { transform: 'translateX(0%)' }
    const closeStyle = { transform: 'translateX(-100%)' }

    let start = (collapsed) ? openStyle : closeStyle
    let end = (collapsed) ? closeStyle : openStyle

    sidebar.animate([
        start,
        end,
    ], settings)

    let header = document.getElementById('header')
    let open = { 'paddingLeft': '0rem' }
    let close = { 'paddingLeft': '2.5rem' }
    let s = (collapsed) ? open : close;
    let f = (collapsed) ? close : open;

    header.animate([
        s,
        f,
    ], settings)
}

let passwordButtonToggle = false;
function showPasswordButton(button) {
    passwordButtonToggle = !passwordButtonToggle

    let text = passwordButtonToggle ? "Hide" : "Show"
    let newType = passwordButtonToggle ? "text" : "password"
    const passwordInput = document.getElementById('passwordInput')
    button.innerText = text;
    passwordInput.type = newType;
}
