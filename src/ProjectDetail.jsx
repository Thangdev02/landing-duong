import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProjectDetail() {
  const { title } = useParams();
  const navigate = useNavigate();

  // Mẫu dữ liệu tạm thời, bạn có thể replace sau
  const projectData = {
    "STEM For Life": {
      role: "Founder",
      image: "/project-autonomous.jpg",
      description:
        "A student-led community initiative providing underprivileged children with access to STEM education through hands-on workshops in coding, robotics, and engineering.",
      content: [
        "Our STEM For Life program started in 2020 with the aim of inspiring young minds.",
        "We organized coding and robotics workshops for over 200 children in underprivileged areas.",
        "We partnered with schools and local communities to make STEM education accessible.",
        "The project has inspired many students to pursue careers in technology and engineering.",
      ],
    },
    "Cybetech Assemble": {
      role: "Technical Advisor",
      image: "/lead1.jpg",
      description:
        "A youth organization promoting digital literacy provided Computer Science guidance, advised on curriculum design, and mentored peers to create accessible educational content.",
      content: [
        "Cybetech Assemble focuses on providing guidance in Computer Science to students.",
        "Mentoring sessions were held weekly to help students understand coding and technology.",
        "The organization collaborated with local schools to expand its reach.",
      ],
    },
    // Bạn có thể thêm các dự án khác ở đây
  };

  const project = projectData[decodeURIComponent(title)] || {
    role: "Unknown Role",
    image: "/placeholder.jpg",
    description: "No description available.",
    content: ["No content yet."],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Cover */}
      <div className="relative h-96 bg-gray-200">
        <img
          src={project.image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            {decodeURIComponent(title)}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 py-12">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-gray-700 font-semibold">Role: {project.role}</span>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back
          </button>
        </div>

        <p className="text-lg text-gray-700 mb-8">{project.description}</p>

        <div className="space-y-6">
          {project.content.map((para, idx) => (
            <p key={idx} className="text-gray-600 leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </div>

        {/* Optional: thêm ảnh, trích dẫn, highlight */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {project.content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
