const puppeteer = require('puppeteer');
const path = require('path');
// '..' since we're in the hstest/ subdirectory; learner is supposed to have src/index.html
const pagePath = 'file://' + path.resolve(__dirname, '../src/index.html');

const hs = require('hs-test-web');

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function stageTest() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args:['--start-maximized']
    });

    const page = await browser.newPage();
    await page.goto(pagePath);

    page.on('console', msg => console.log(msg.text()));

    await sleep(1000);

    let result = await hs.testPage(page,
        // Test #1
        () => {
            let bodyNodes = Array.from(document.body.childNodes);
            this.innerBodyElements = bodyNodes.filter(
                e => e.nodeType === Node.ELEMENT_NODE);

            let len = this.innerBodyElements.length;

            return len === 7 ?
                hs.correct() :
                hs.wrong(`There should be 7 elements in the body of the HTML document, found: ${len}`)
        },

        // Test #2
        () => {
            let failNum = 0;
            let failElem = '';
            let i = 0;
            for (let elem of this.innerBodyElements) {
                i++;
                elem = elem.nodeName.toLowerCase();
                if (elem !== 'kbd') {
                    failNum = i;
                    failElem = elem;
                    break;
                }
            }

            return failNum === 0 ?
                hs.correct() :
                hs.wrong(`Element #${failNum} is not <kbd> element, it's <${failElem}>`);
        },

        // Test #3
        () => {
            let failNum = 0;
            let textInside = '';
            let i = 0;
            for (let elem of this.innerBodyElements) {
                i++;
                elem = elem.innerHTML;
                if (elem.length !== 1) {
                    failNum = i;
                    textInside = elem;
                    break;
                }
            }

            if (failNum === 0) {
                return hs.correct();
            }

            if (textInside.length === 0) {
                return hs.wrong(`Element #${failNum} is empty, ` +
                    `but should contain a single letter.`);
            }

            return hs.wrong(`Element #${failNum} contains ${textInside.length} symbols, ` +
                `but should contain a single letter. The text inside element is:\n"${textInside}"`);
        },
    );

    await browser.close();
    return result;
}


jest.setTimeout(30000);
test("Test stage", async () => {
        let result = await stageTest();
        if (result['type'] === 'wrong') {
            fail(result['message']);
        }
    }
);
