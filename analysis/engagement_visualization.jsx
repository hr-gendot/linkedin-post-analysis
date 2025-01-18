import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PostAnalysis = () => {
  const data = [
    { name: 'Leadership', reactions: 1882, comments: 587, posts: 3 },
    { name: 'AI Tech', reactions: 487, comments: 89, posts: 8 },
    { name: 'Implementation', reactions: 323, comments: 255, posts: 5 },
    { name: 'Education', reactions: 289, comments: 42, posts: 4 }
  ];

  return (
    <div className="w-full h-96">
      <h2 className="text-xl font-bold mb-4">Post Performance by Category</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="reactions" fill="#8884d8" name="Reactions" />
          <Bar dataKey="comments" fill="#82ca9d" name="Comments" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PostAnalysis;