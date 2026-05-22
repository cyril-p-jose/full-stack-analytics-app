import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const data = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 700 },
  { month: "Mar", users: 1200 },
  { month: "Apr", users: 900 },
  { month: "May", users: 1700 }
];

function Dashboard() {

  return (
    <div style={{ padding: "30px" }}>

      <h1>Analytics Dashboard</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px"
        }}
      >

        <h2>User Growth</h2>

        <LineChart
          width={700}
          height={300}
          data={data}
        >

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#8884d8"
          />

        </LineChart>

      </div>

    </div>
  );
}

export default Dashboard;
