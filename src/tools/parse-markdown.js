import jsdom from 'jsdom';
import MarkdownIt from 'markdown-it';
import fs from 'fs/promises';

import rootname from '../../rootname.js';

const markdownData = await fs.readFile(`${rootname}/src/data/journal.md`, 'utf8');

const markdownParser = MarkdownIt();

const { JSDOM } = jsdom;
const { document } = (new JSDOM('<div>')).window;
const div = document.querySelector('div');

function trimAll(t) {
	return t.trim();
}

function splitMarkdown(markdown, delimiter) {
	return markdown.split(delimiter); // .reverse();
}

function removeElement(el) {
	el.parentNode.removeChild(el);
}

function getTitle(parent) {
	const element = parent.querySelector('h2');
	const text = element.textContent;
	removeElement(element);
	return text;
}

function getDate(parent) {
	const element = parent.querySelector('h3');
	const text = element.textContent;
	removeElement(element);
	return text;
}

function getSummary(parent) {
	const element = parent.querySelector('h4');
	const text = element.textContent;
	removeElement(element);
	return text;
}

function getTags(parent) {
	const element = parent.querySelector('ul');
	const items = element.querySelectorAll('li');
	const tags = [...items].map((tag, i) => {
		return { id: i, tag: tag.textContent };
	});
	removeElement(element);
	return tags;
}

function getLink(id, title) {
	return (
		`${title}-${id}`
			.replace(/[.,/#!$%^&*;:'{}=_`~()]/g, '')
			.replace(/\s/g, '-')
			.toLowerCase()
	);
}

function getListItems(list) {
	return Array.from(list.querySelectorAll('li')).map((item, id) => {
		return { id, type: 'listitem', html: trimAll(item.innerHTML) };
	});
}

function getBody(el) {

	const selector = 'h2, h3, h4, blockquote, img, table, ul, ol, p';

	return [...el.querySelectorAll(selector)].reduce((p, c, i) => {

		switch (c.nodeName) {

			case 'UL': {
				p.push({ id: i, type: 'list', variant: 'unordered', items: getListItems(c) });
				break;
			}

			case 'OL': {
				p.push({ id: i, type: 'list', variant: 'ordered', items: getListItems(c) });					
				break;
			}

			case 'TABLE': {
				p.push({ id: i, type: 'table', html: trimAll(c.innerHTML) });
				break;
			}

			case 'IMG': {
				p.push({ id: i, type: 'image', src: c.src, alt: c.alt });
				break;
			}

			case 'P': {

				// Make sure that only root paragraphs are rendered so
				// that it doesn't get confused with ordered lists which
				// also have paragraphs in them for some reason (markdown-it issue?)
				if (c.parentElement.nodeName === 'DIV') {
					if (c.firstChild.nodeName !== 'IMG') {
						const name = c.parentNode.nodeName;
						const type = name === 'BLOCKQUOTE' ? 'blockquote' : 'para';
						p.push({ id: i, type, html: trimAll(c.innerHTML) });
					}
				}
				break;
			}

			case 'H3': {
				p.push({ id: i, type: 'h3', text: trimAll(c.textContent) });
				break;
			}

			case 'H4': {
				p.push({ id: i, type: 'h4', text: trimAlle(c.textContent) });
				break;
			}

		}
		return p;
	}, []);
}

function buildEntry(md, index, arr) {
	
	const html = markdownParser.render(md);
	
	div.innerHTML = trimAll(html);
	// console.log(html)

	const title = getTitle(div);
	const date = getDate(div);
	const summary = getSummary(div);
	const tags = getTags(div);
	const link = getLink((arr.length - 1) - index, title);
	const body = getBody(div);
	const cdata = trimAll(div.innerHTML);

	const entry = {
		id: (arr.length - 1) - index,
		title,
		date,
		summary,
		tags,
		link,
		body,
		cdata
	};

	return entry;

}

function buildTagList(entries) {
	return entries.reduce((acc, { tags }) => {
		tags.forEach(({ tag }) => {
			acc[tag] ??= 0;
			acc[tag]++;
		});
		return acc;
	}, {});
}

function processMarkdown(markdown) {
	return new Promise((resolve, reject) => {
		const delimiter = '\n\n---\n\n';
		const markdownArr = splitMarkdown(markdown, delimiter);
		const entries = markdownArr.map(buildEntry); // .reverse();
		const links = entries.map(entry => entry.link);
		const tags = buildTagList(entries);
		try {
			resolve({ id: 0, title: 'Journal', entries, links, tags });
		} catch (e) {
			reject(e);
		}
	});
}

const data = await processMarkdown(markdownData);
await fs.writeFile(`${rootname}/src/data/journal.json`, JSON.stringify(data), 'utf8');

export default processMarkdown;
