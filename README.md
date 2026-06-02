# 🚀 Job Portal Platform - MERN Stack

Một ứng dụng cổng thông tin việc làm (Job Portal) toàn diện được xây dựng bằng **MERN Stack** (MongoDB, Express.js, React.js, Node.js). 
Hệ thống cung cấp hai luồng người dùng riêng biệt: **Job Seeker** (Người tìm việc) và **Employer** (Nhà tuyển dụng) với các tính năng chuyên sâu cho từng vai trò.

## ✨ Tính năng nổi bật

### 👨‍💼 Dành cho Người tìm việc (Job Seeker)
* **Khám phá việc làm:** Tìm kiếm và lọc các công việc phù hợp (`/find-jobs`).
* **Chi tiết công việc:** Xem thông tin chi tiết của từng vị trí tuyển dụng (`/job/:jobId`).
* **Quản lý công việc đã lưu:** Lưu lại các công việc yêu thích để nộp hồ sơ sau (`/saved-jobs`).
* **Hồ sơ cá nhân:** Cập nhật thông tin, CV và kỹ năng cá nhân (`/profile`).

### 🏢 Dành cho Nhà tuyển dụng (Employer)
* **Bảng điều khiển (Dashboard):** Theo dõi tổng quan các số liệu thống kê và hoạt động (`/employer-dashboard`).
* **Đăng tin tuyển dụng:** Tạo và đăng tải các vị trí công việc mới (`/post-job`).
* **Quản lý tin đăng:** Chỉnh sửa, đóng hoặc xóa các bài đăng tuyển dụng (`/manage-jobs`).
* **Quản lý ứng viên:** Xem danh sách hồ sơ ứng tuyển và quản lý trạng thái ứng viên (`/applicants`).
* **Hồ sơ công ty:** Xây dựng thương hiệu nhà tuyển dụng với trang thông tin công ty (`/company-profile`).

---

## 🛠 Công nghệ sử dụng

### Frontend
* **Core:** React.js, React Router v6, Context API (AuthContext)
* **Styling & UI:** Tailwind CSS, Lucide-React (Icons)
* **Data Fetching & State:** Axios
* **Utilities:** React-Hot-Toast (Thông báo UI)

### Backend
* **Core:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Security & Auth:** JWT (JSON Web Token), Bcrypt

---

## 📂 Cấu trúc API (Backend)

Hệ thống Backend RESTful API được chia thành các route chính sau:

| Endpoint | Chức năng chính |
| :--- | :--- |
| `/api/auth` | Đăng ký, đăng nhập, cấp phát và xác thực Token. |
| `/api/user` | Quản lý thông tin tài khoản, profile cá nhân/công ty. |
| `/api/jobs` | CRUD công việc (Đăng, sửa, xóa, lấy danh sách công việc). |
| `/api/applications` | Xử lý nộp hồ sơ, duyệt hồ sơ, xem danh sách ứng viên. |
| `/api/save-jobs` | Xử lý việc lưu và bỏ lưu các công việc yêu thích. |
| `/api/analytics` | Lấy dữ liệu thống kê cho Dashboard của Nhà tuyển dụng. |

---

## 🗺 Cấu trúc Routing (Frontend)

Hệ thống sử dụng `react-router-dom` với cơ chế bảo vệ Route (Protected Route) dựa trên vai trò (Role-based access control).

| Nhóm | Đường dẫn (Path) | Component | Trạng thái |
| :--- | :--- | :--- | :--- |
| **Public** | `/`, `/login`, `/signup` | Landing Page, Auth Pages | Mọi người |
| **Job Seeker** | `/find-jobs`, `/job/:jobId` | Khám phá & Chi tiết công việc | Cần đăng nhập |
| **Job Seeker** | `/saved-jobs`, `/profile` | Công việc đã lưu & Hồ sơ | Cần đăng nhập |
| **Employer** | `/employer-dashboard`, `/post-job` | Thống kê & Đăng việc | **Chỉ Employer** |
| **Employer** | `/manage-jobs`, `/applicants` | Quản lý việc làm & Ứng viên | **Chỉ Employer** |
| **Employer** | `/company-profile` | Hồ sơ doanh nghiệp | **Chỉ Employer** |
| **Fallback** | `*` | Chuyển hướng về `/` | Mọi người |

---

## ⚙️ Hướng dẫn cài đặt và khởi chạy
```
bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name
```
### Cài đặt backend
```
cd backend
npm install
```
**Tạo file .env trong thư mục backend và thêm các biến môi trường:**
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
** Run server **
npm run dev
### Cài đặt Frontend

```
cd frontend
npm install
```
*Dùng Vite nên chạy*
```
npm run dev
```