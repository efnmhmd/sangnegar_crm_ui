import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';

const Table = ({ data, columns }) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<table className="w-full">
			<thead>
				{table.getHeaderGroups().map((headerGroup, i) => (
					<tr
						key={i}
						className="border-b border-b-gray-700 text-right"
					>
						{headerGroup.headers.map((header, index) => (
							<th
								key={index}
								className="p-4 text-base font-normal"
							>
								{header.isPlaceholder
									? null
									: flexRender(
											header.column.columnDef.header,
											header.getContext(),
										)}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody>
				{table.getRowModel().rows.map((row, index) => (
					<tr
						key={index}
						className="duration-150 even:bg-black/40 hover:bg-primary/35"
					>
						{row.getVisibleCells().map((cell, index) => (
							<td key={index} className="p-4">
								{flexRender(
									cell.column.columnDef.cell,
									cell.getContext(),
								)}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
