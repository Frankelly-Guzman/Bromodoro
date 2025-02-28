"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Define the Graph component with dynamic data
const Graph = ({ title, data }: { title: string; data: any[] }) => {
  const chartConfig = {
    focusHours: {
      label: "Focus Hours",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

  return (
    <div className="w-full text-white text-lg">
      <h2 className="text-lg font-bold mb-8 text-center">{title}</h2>
      <ChartContainer config={chartConfig}>
        <BarChart width={500} height={300} accessibilityLayer data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tick={{ fontSize: 16, fill: "white" }} 
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="focusHours" fill="#8B0000" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default Graph
