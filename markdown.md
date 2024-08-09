# **Tổng hợp kiến thức đã học**

## **1. Version Control System**
- **Version Control System (VCS)**: là hệ thống quản lý các phiên bản
- **Google Docs** sử dụng Version Control System để dễ quản lý các phiên bản
- **Local**: Lưu ở  máy cá nhân
- **Centralize**: Lưu ở máy chủ tập trung
- **Distributed**: Lưu ở nhiều máy khác nhau

    ![Hình ảnh](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkH23Iqm15blQa7-koMKDyeDItP8cNBg5yfg&s)
    
## **2. Git**
### **a.  Git  là gì**
- **Git** được viết bởi **Linus Torvalds**, cha để của **Linux**.
- **Git** là từ được viết sai chính tả (Có chủ đích) của *Get*, vì *Get* đã được sử dụng rồi
- Dùng **Git** do nhu cầu quản lý các phiên bản và làm  việc giữa nhiều người với nhau.

### **b. Git và Github**
- **Git**
    - Là một phần mềm.  
    - Cài trên Local.
    - Command line tool.
    - Công cụ quản lý phiên bản, đưa sfile  vào Git Repository.
    - Các tính năng của Version Control System.
- **Github**
    - Là một dịch vụ website.
    - Host trên Website
    - Công cụ có giao diện
    - Nơi để update Git Repository lên
    - Các tính năng Version Control System và các tính năng khác.

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7uYkcUkzHhej_JZHRlhzww7xr1HdEiXtQ6kLwdq9DUApa3VPrBdT7b7jVTQvRfWug28&usqp=CAU)
### **c. Git - Three States**
- **Working Directory :**
    Các file mới hoặc file có thay đổi
- **Staging Area :**
    Các file đưa vào vùng chuẩn bị commit (Tạo ra các phiên bản)
- **Repository :**
    Các commit (Phiên bản)
    ![Hình ảnh](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AcV3snxLEYONwxueSdwB2fEAKgaQ3D2SwA&s)
### **d. Git - Key TakeAways**
- Khởi tạo thư mục được quản lý bởi Git.
    
        git  init
- Cấu tình Name và Email cho Git

        git config --global user.name "K8 - Name"

        git config --global user.email              "test@gmail.com"
-  Thêm file vào vùng Staging

        Git add file.ts

        Git add .
-  Commit

        git commit -m"message"
- Deloy Code lên Github

        git push origin master
- Sửa đổi commit gần nhất

        git commit --amend
- Thay đổi thông điệp commit gần nhất

        git commit --amend -m"<message>"
- Loại bỏ một tệp khỏi vùng stage.

        git restore --staged <file>
- Hủy bỏ commit gần nhất.

        git reset HEAD~1


### **e. Git - Commit Convention**
- Commit Message cần rõ ràng, chuyên nghiệp
- Trong lớp học, dùng convention sau: **<type>: <short_description>**
- Trong đó
    * **Type:** Loại commit

        * **Chore:** Sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
        * **Feat:** Thêm tính năng, thêm case mới.
        * **Fix:** Sửa lỗi test trước đó.
    * **short_description:** Mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.

            Ví dụ: 
            "Chore: Remove unused file"
            "Feat: Add code for exercises 2"


## **3. Javascript Basic**
### **a. Javascipt là gì**
- *“Ăn theo”* cái tên hot : **Java**
- Là một ngôn ngữ lập trình.
- Ra đời năm 1995 bởi Brendan Eich.
- Giúp cho browser hoạt động được.
- Top Language: [Stackoverflow report](https://survey.stackoverflow.co/2023/#section-most-popular-technologies-programming-scripting-and-markup-languages)
- Bình thường Javascript chạy được do browser engine support
    * Edge: Chaka
    * Firefox: SpiderMonkey
    * Chrome: V8
- Để chạy được trên máy tính không cần trình duyệt, cần Node Js
- Run-time trong JavaScript (JS) là thời điểm mà code JavaScript được thực thi và chạy trong trình duyệt web hoặc môi trường JavaScript khác. Có hai loại run-time chính trong JavaScript:

    * **Browser run-time:** Đây là khi code JavaScript được chạy trong trình duyệt web. Trình duyệt web sẽ thông dịch và thực thi code JavaScript, sau đó hiển thị kết quả lên giao diện người dùng.
    * **Server run-time (Node.js):** Đây là khi code JavaScript được chạy trên server (máy chủ) bằng cách sử dụng môi trường thực thi JavaScript như Node.js. Trong trường hợp này, code JavaScript được sử dụng để xử lý các yêu cầu, tương tác với cơ sở dữ liệu, và trả về kết quả cho client (trình duyệt).

###  **b. Format Code**

- Mac: Option + Shift + F
- Window: Alt + Shift + F

    ![alt text](image.png))
