<script>
	import Blockquote from '../Blockquote/index.svelte';
	import Heading from '../Heading/index.svelte';
	import Image from '../Image/index.svelte';
	import Footnotes from '../Footnotes/index.svelte';
	import HR from '../HR/index.svelte';
	import List from '../List/index.svelte';
	import Paragraph from '../Paragraph/index.svelte';
	import Table from '../Table/index.svelte';
	export let section;
</script>

{#if section.type === 'h3'}
	<Heading type="h3" text={section.text} />

{:else if section.type === 'blockquote'}
	<Blockquote html={section.html} />

{:else if section.type === 'image'}
	<Image src={section.src} alt={section.alt} />

{:else if section.type === 'table'}
	<Table html={section.html} />

{:else if section.type === 'hr'}
	<HR />

{:else if section.type === 'footnotes'}
	<Footnotes footnotes={section.footnotes} />

{:else if section.type === 'list'}
	<List variant={section.variant} items={section.items} />

{:else}
	<Paragraph html={section.html} />
{/if}
