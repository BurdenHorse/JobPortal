import { 
    Award,
    BarChart3, 
    Briefcase, 
    Building2, 
    Clock, 
    FileText, 
    LayoutDashboard, 
    MessageSquare, 
    Plus, 
    Search, 
    Shield, 
    Users 
} from "lucide-react";

export const jobSeekerFeatures = [
    {
        icon: Search,
        title: "Smart Job Matching",
        description: "AI-powered algorithm matches you with relevant opportunities based on your skills"
    },
    {
        icon: FileText,
        title: "Resume Builder",
        description: "Create professional resumes with our intuitive builder and templates designed"
    },
    {
        icon: MessageSquare,
        title: "Direct Communication",
        description: "Connect directly with hiring managers and recruiters through our secure message"
    },
    {
        icon: Award,
        title: "Skill Assessment",
        description: "Showcase your abilities with verified skill tests and earn badges that employers can see you"
    },
];

export const employerFeatures = [
    {
        icon: Users,
        title: "Talent Pool Access",
        description: "Access our vast datatbase of pre-screened candidates and find the perfect fit talents"
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track your hiring performance with detailed analytics and insights on candidates"
    },
    {
        icon: Shield,
        title: "Quick Hiring",
        description: "All candidates undergo background verification to ensure you're hiring trustworthy"
    },
    {
        icon: Clock,
        title: "Quick Hiring",
        description: "Streamlined hiring process reduces time-to-hire by 60% with automated screening"
    },
]


export const NAVIGATION_MENU = [
    {id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard},
    {id: "post-jobs", name: "Post Job", icon: Plus},
    {id: "manage-jobs", name: "Manage Jobs", icon: Briefcase},
    {id: "company-profile", name: "Company Profile", icon: Building2},
];


export const CATEGORIES = [
    { value: "Engineering", label: "Engineering" },
    { value: "Design", label: "Design" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "IT R& Software", label: "IT R& Software" },
    { value: "Customer-service", label: "Customer Service" },
    { value: "Product", label: "Product" },
    { value: "Operations", label: "Operations" },
    { value: "Finance", label: "Finance" },
    { value: "HR", label: "Human Resources" },
    { value: "Other", label: "Other" },
];

export const JOB_TYPES = [
    { value: "Remote", label: "Remote"},
    { value: "Full-Time", label: "Full-Time"},
    { value: "Part-Time", label: "Part-Time"},
    { value: "Contract", label: "Contract"},
    { value: "Internship", label: "Internship"},
];

export const SALARY_RANGES = [
    "Less than $1000",
    "$1000 - $15,000",
    "More than $15,000",
];