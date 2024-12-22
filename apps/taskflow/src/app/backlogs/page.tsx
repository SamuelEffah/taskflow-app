"use client";
import { useVirtualizer } from "@tanstack/react-virtual";
import React, { ReactElement, useRef, useState } from "react";
import BacklogItem from "../components/backlog-item/backlog-item";

const Backlogs = () => {
	const parentRef = useRef(null);

	const rowVirtualizer = useVirtualizer({
		count: 5,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 60,
	});

	return (
		<div className="relativ h-full px-10">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-lg p-0 mt-2 font-bold">Backlogs</h1>
					<span className="text-[#6f6f6f] font-medium text-sm p-0 m-0 ">
						12 issues
					</span>
				</div>
			</div>

			<div
				ref={parentRef}
				style={{
					height: `600px`,
					overflow: "auto",
				}}
			>
				<div
					style={{
						height: `${rowVirtualizer.getTotalSize()}px`,
						width: "100%",
						position: "relative",
					}}
				>
					{rowVirtualizer.getVirtualItems().map((virtualItem) => (
						<div
							key={virtualItem.key}
							onClick={(e) => {
								e.preventDefault();
							}}
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: `${virtualItem.size}px`,
								transform: `translateY(${virtualItem.start}px)`,
							}}
						>
							<BacklogItem />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Backlogs;
