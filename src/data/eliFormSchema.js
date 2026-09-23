export const ELI_VOLUNTEER_FORM_SCHEMA = {
  id: "eli-volunteer-4",
  slug: "volunteer",
  title: "ELi 4.0 Volunteer Application",
  organization: "Engineering Ladies Initiative (ELi)",
  badge: "ELi 4.0 Recruitment",
  coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
  appsScriptUrl: "", // User can paste their Google Apps Script Web App URL here
  
  welcome: {
    heading: "Hey girl, welcome to ELi! ✨",
    subheading: "We’re so excited that you’re interested in being part of the team.",
    body: "ELi is a community of ambitious women in engineering who are here to connect, grow, create and make things happen and we’d love to have you be part of it.",
    cta: "Ready to join us? Let’s get to know you 💕"
  },

  rrDocUrl: "https://docs.google.com/document/d/1dCbhSMp29WAuXs75mYSwqaxSHRCk3fe0s0kRLH7IEKs/edit?usp=drivesdk",
  
  sections: [
    {
      id: "personal_info",
      title: "1. Personal & Academic Profile",
      description: "Tell us a bit about who you are and what you're studying.",
      fields: [
        {
          id: "full_name",
          label: "Full Name",
          placeholder: "e.g. Ada Lovelace",
          type: "text",
          required: true
        },
        {
          id: "email",
          label: "Email Address",
          placeholder: "you@example.com",
          type: "email",
          required: true
        },
        {
          id: "phone_number",
          label: "Phone Number (WhatsApp)",
          placeholder: "+234 800 000 0000",
          type: "tel",
          required: true
        },
        {
          id: "in_engineering",
          label: "Are you in engineering? If yes, what department?",
          placeholder: "e.g. Yes, Electrical & Electronics Engineering",
          type: "text",
          required: true
        },
        {
          id: "non_engineering",
          label: "If no, what faculty/department?",
          placeholder: "e.g. Computer Science, Faculty of Science",
          type: "text",
          required: false
        },
        {
          id: "academic_level",
          label: "Level / Status",
          type: "select",
          required: true,
          options: [
            "100 Level",
            "200 Level",
            "300 Level",
            "400 Level",
            "500 Level",
            "Postgraduate",
            "Alumna",
            "Other"
          ]
        }
      ]
    },
    {
      id: "team_preferences",
      title: "2. Team Interest & Role",
      description: "Select the team you feel most passionate about joining!",
      fields: [
        {
          id: "teams_interested",
          label: "Which team are you most interested in?",
          subtitle: "If you’re not sure of which to join, kindly go through the R and R expected from each team.",
          type: "team_checkbox_grid",
          required: true,
          options: [
            { id: "Content", name: "Content", desc: "Craft engaging stories, newsletters & written pieces", icon: "FileText" },
            { id: "Sponsorship", name: "Sponsorship", desc: "Build strategic partnerships & fund initiatives", icon: "Handshake" },
            { id: "Marketing", name: "Marketing", desc: "Drive growth, campaigns & social media reach", icon: "TrendingUp" },
            { id: "Logistics", name: "Logistics", desc: "Coordinate smooth event execution & ops", icon: "PackageCheck" },
            { id: "Training", name: "Training", desc: "Design technical workshops & learning tracks", icon: "GraduationCap" },
            { id: "Operations", name: "Operations", desc: "Keep community workflows seamless & organized", icon: "Settings" },
            { id: "Design", name: "Design", desc: "Create vibrant visuals, graphics & UI/UX assets", icon: "Palette" },
            { id: "Quality Control", name: "Quality Control", desc: "Ensure highest standards across all deliverables", icon: "ShieldCheck" },
            { id: "External Relations", name: "External Relations", desc: "Connect with speakers, guests & partner orgs", icon: "Globe" },
            { id: "Web Development", name: "Web Development", desc: "Build & maintain ELi digital platforms", icon: "Code" }
          ]
        },
        {
          id: "role_applied",
          label: "Role",
          type: "radio_cards",
          required: true,
          options: [
            { value: "Team Lead", label: "Team Lead", desc: "Lead team strategy, coordinate members & ensure goals are met" },
            { value: "Deputy Team Lead", label: "Deputy Team Lead", desc: "Support leadership, manage tasks & drive team momentum" },
            { value: "Team Member", label: "Team Member", desc: "Execute projects, collaborate closely & build awesome things" }
          ]
        }
      ]
    },
    {
      id: "experience_motivation",
      title: "3. Experience & Motivation",
      description: "Share your vision and strengths with us.",
      fields: [
        {
          id: "why_join",
          label: "Why would you want to join ELi 4.0?",
          placeholder: "Tell us what excites you about ELi 4.0...",
          type: "textarea",
          required: true,
          rows: 3
        },
        {
          id: "skills_strengths",
          label: "What skills/strength would you bring to the team?",
          placeholder: "Share your superpowers (e.g. communication, coding, graphic design, project management)...",
          type: "textarea",
          required: true,
          rows: 3
        },
        {
          id: "previous_leadership",
          label: "Have you ever volunteered or held a leadership role? If yes, share the experience with us",
          placeholder: "Briefly mention past volunteering, student body roles, or leadership positions...",
          type: "textarea",
          required: true,
          rows: 3
        },
        {
          id: "time_commitment",
          label: "How much time can you commit to ELi activities?",
          type: "select",
          required: true,
          options: [
            "2 - 4 hours per week",
            "5 - 8 hours per week",
            "8 - 12 hours per week",
            "12+ hours per week (Fully Dedicated)"
          ]
        }
      ]
    }
  ],

  closing: {
    heading: "YOU’RE OFFICIALLY ON OUR RADAR! 🚀💖",
    message: "Thank you for volunteering with ELi. Your application has been received, and we’re so excited about the possibility of having you on our team.\n\nKeep an eye on your email/WhatsApp for the next steps!"
  }
};

export const INITIAL_FORMS_LIST = [
  ELI_VOLUNTEER_FORM_SCHEMA,
  {
    id: "eli-mentorship-2026",
    slug: "mentorship",
    title: "ELi Mentorship Program 2026",
    organization: "Engineering Ladies Initiative",
    badge: "Mentorship",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    appsScriptUrl: "",
    welcome: {
      heading: "Elevate Your Career with ELi Mentorship ✨",
      subheading: "Connect with seasoned female engineering leaders for 1-on-1 guidance.",
      body: "Whether you want to get into software engineering, hardware, research, or leadership, our mentors are here to guide your path.",
      cta: "Apply as a Mentor or Mentee today! 🚀"
    },
    sections: [
      {
        id: "profile",
        title: "Profile & Track",
        fields: [
          { id: "full_name", label: "Full Name", type: "text", required: true },
          { id: "email", label: "Email Address", type: "email", required: true },
          { id: "role_type", label: "Applying As", type: "select", options: ["Mentee (Student / Early Career)", "Mentor (Industry Professional)"], required: true },
          { id: "track", label: "Engineering Track", type: "select", options: ["Software Engineering", "Electrical / Hardware", "Civil & Mechanical", "Data Science & AI", "Product & Design", "Research & Academia"], required: true },
          { id: "goals", label: "Key Goals for Mentorship", type: "textarea", required: true }
        ]
      }
    ],
    closing: {
      heading: "APPLICATION SUBMITTED! 🌟",
      message: "Thank you for applying to the ELi Mentorship Program 2026. Our team is matching mentor-mentee pairs and will reach out shortly."
    }
  },
  {
    id: "eli-event-reg",
    slug: "event-registration",
    title: "ELi Women in Tech Summit 2026",
    organization: "Engineering Ladies Initiative",
    badge: "Annual Summit",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    appsScriptUrl: "",
    welcome: {
      heading: "Women in Engineering Tech Summit 2026 🎉",
      subheading: "Join 500+ female engineers for keynotes, workshops, and networking.",
      body: "A 2-day immersive summit packed with panel discussions, technical hackathons, and recruiter speed-dating.",
      cta: "Reserve your spot now!"
    },
    sections: [
      {
        id: "registration",
        title: "Ticket Details",
        fields: [
          { id: "full_name", label: "Full Name", type: "text", required: true },
          { id: "email", label: "Email Address", type: "email", required: true },
          { id: "ticket_type", label: "Ticket Type", type: "select", options: ["Student Pass (Free)", "Professional Pass", "Virtual Attendee Pass"], required: true },
          { id: "workshop_choice", label: "Workshop Choice", type: "select", options: ["AI & Machine Learning", "Embedded Systems & IoT", "Building Resilient Cloud Apps", "Leadership for Female Engineers"], required: true }
        ]
      }
    ],
    closing: {
      heading: "YOU'RE REGISTERED! 🎟️",
      message: "Your ticket has been generated. Check your inbox for the summit schedule and calendar invite."
    }
  }
];
