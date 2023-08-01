export default function Footnote({ footnote }) {
	return (
		<li id={footnote.fnid} dangerouslySetInnerHTML={{ __html: footnote.html }} />
	);
}
