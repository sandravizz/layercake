import Line from './_examples/Line.svelte';
import Scatter from './_examples/Scatter.svelte';
import MapSvg from './_examples/MapSvg.svelte';
import Column from './_examples/Column.svelte';
import AreaStacked from './_examples/AreaStacked.svelte';
import ColumnStacked from './_examples/ColumnStacked.svelte';
import MultiLine from './_examples/MultiLine.svelte';
import MapLayered from './_examples/MapLayered.svelte';
import Bar from './_examples/Bar.svelte';
import BarStacked from './_examples/BarStacked.svelte';
import ScatterWebGL from './_examples/ScatterWebgl.svelte';
import ClevelandDotPlot from './_examples/ClevelandDotPlot.svelte';
import Histogram from './_examples/Histogram.svelte';
import SmallMultiples from './_examples/SmallMultiples.svelte';
import Calendar from './_examples/Calendar.svelte';
import Timeplot from './_examples/Timeplot.svelte';
import Radar from './_examples/Radar.svelte';
import CirclePack from './_examples/CirclePack.svelte';
import CirclePackNested from './_examples/CirclePackNested.svelte';
import Sankey from './_examples/Sankey.svelte';
import Brush from './_examples/Brush.svelte';
import SyncedBrush from './_examples/SyncedBrush.svelte';
import Beeswarm from './_examples/Beeswarm.svelte';
import BeeswarmForce from './_examples/BeeswarmForce.svelte';
import CirclePackForce from './_examples/CirclePackForce.svelte';

export default [
	{
		title: 'Line + area',
		slug: 'Line',
		component: Line
	},
	{
		title: 'WebGL Scatter (svg axes, quadtree hover)',
		slug: 'ScatterWebgl',
		component: ScatterWebGL
	},
	{
		title: 'Map (svg, tooltip, pre-projected)',
		slug: 'MapSvg',
		component: MapSvg
	},
	{
		title: 'Multilayer map (canvas + svg)',
		slug: 'MapLayered',
		component: MapLayered
	},
	{
		title: 'Column annotated',
		slug: 'Column',
		component: Column
	},
	{
		replPath: 'f38656e90d0644cfb460206005c492e5?version=3.46.2',
		title: 'Stacked column',
		slug: 'ColumnStacked',
		component: ColumnStacked
	},
	{
		replPath: '91fe94cac36c4829903238382563bc81?version=3.46.2',
		title: 'Bar',
		slug: 'Bar',
		component: Bar
	},
	{
		replPath: '8d2e9a75cb0e4bf7abb86cb65915a93c?version=3.46.2',
		title: 'Stacked bar',
		slug: 'BarStacked',
		component: BarStacked
	},
	{
		replPath: 'cc8d7b6ace40433da8d694f2877258a8?version=3.46.2',
		title: 'Multiline (html labels + quadtree tooltip)',
		slug: 'MultiLine',
		component: MultiLine
	},
	{
		replPath: 'e6ae831e723646c8a01a039b3eeb33cb?version=3.46.2',
		title: 'Stacked area',
		slug: 'AreaStacked',
		component: AreaStacked
	},
	{
		replPath: 'd9a9c151058d4e3eb74a4eed60eabb54?version=3.46.2',
		title: 'Scatter (svg + canvas + voronoi)',
		slug: 'Scatter',
		component: Scatter
	},
	{
		replPath: 'f9f33add37d440f78b24092c7ba8154d?version=3.46.2',
		title: 'Cleveland dot plot',
		slug: 'ClevelandDotPlot',
		component: ClevelandDotPlot
	},
	{
		replPath: 'fd96397862ff43e09fc8c83bfd818642?version=3.46.2',
		title: 'Calendar (one cake per month)',
		slug: 'Calendar',
		component: Calendar
	},
	{
		replPath: '2c5131bd0b694d54a6211b40afbd3c09?version=3.46.2',
		title: 'Time of day plot',
		slug: 'Timeplot',
		component: Timeplot
	},
	{
		replPath: '58a15bea15bd46ee8364409c15045a8b?version=3.46.2',
		title: 'Histogram (variable bins)',
		slug: 'Histogram',
		component: Histogram
	},
	{
		replPath: '1c3297c4347248fc885b215f4907f8b2?version=3.46.2',
		title: 'Small multiples (animated domain transition)',
		slug: 'SmallMultiples',
		component: SmallMultiples
	},
	{
		replPath: 'cb6bb95b7d1549f7be8d8fc7258ea1da?version=3.46.2',
		title: 'Radar chart',
		slug: 'Radar',
		component: Radar
	},
	{
		title: 'Circle pack',
		slug: 'CirclePack',
		component: CirclePack
	},
	{
		title: 'Nested circle pack',
		slug: 'CirclePackNested',
		component: CirclePackNested
	},
	{
		title: 'Sankey',
		slug: 'Sankey',
		component: Sankey
	},
	{
		title: 'Brush',
		slug: 'Brush',
		component: Brush
	},
	{
		title: 'Synced brush',
		slug: 'SyncedBrush',
		component: SyncedBrush
	},
	{
		title: 'Beeswarm',
		slug: 'Beeswarm',
		component: Beeswarm
	},
	{
		title: 'Beeswarm, force layout',
		slug: 'BeeswarmForce',
		component: BeeswarmForce
	},
	{
		title: 'Circle pack, force layout',
		slug: 'CirclePackForce',
		component: CirclePackForce
	}
];
