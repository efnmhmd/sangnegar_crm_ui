import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';

const TableSmall = ({ data, columns }) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<table className="w-full">
			<thead>
				{table.getHeaderGroups().map((headerGroup) => (
					<tr key={headerGroup.id} className="text-right">
						{headerGroup.headers.map((header) => (
							<th
								key={header.id}
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
				{table.getRowModel().rows.map((row) => (
					<tr
						key={row.id}
						className="border-t border-gray-400 duration-150 even:bg-black/40 hover:bg-primary/35"
					>
						{row.getVisibleCells().map((cell) => (
							<td key={cell.id} className="p-4">
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

export default TableSmall;
