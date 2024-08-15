import { test, expect } from '@playwright/test';

test('Add notes and search by title', async ({ page }) => {
    // Truy cập trang tài liệu Playwright
    await page.goto('https://material.playwrightvn.com/');

    // Click vào "Bài học 4: Personal notes"
    await page.click('//a[@href="04-xpath-personal-notes.html"]');

    const linksToAdd = [
        { title: 'Cá voi lưng gù sống lâu nhất thế giới', excerpt: 'Cá voi lưng gù đực chụp ảnh lần đầu tiên năm 1972, được phát hiện tháng trước ở Alaska.' },
        { title: 'Trung Quốc dùng điện mặt trời để chống sa mạc hóa', excerpt: 'Đang tìm kiếm giải pháp thân thiện với môi trường để bảo vệ các khu vực bị sa mạc hóa.' },
        { title: 'Phát hiện 5 loài nấm mới tại Việt Nam', excerpt: 'Nghiên cứu khảo sát đã chỉ ra rằng có 5 loài nấm mới chưa được khám phá trước đây.' },
        { title: 'Phát hiện 25 tấn nước phóng xạ rò rỉ ở Fukushima', excerpt: 'Thông tin mới về tình trạng nước phóng xạ rò rỉ tại nhà máy Fukushima.' },
        { title: 'Giàn turbine gió kép mạnh nhất thế giới ra khơi', excerpt: 'Giàn turbine gió mới được thiết kế với công suất lớn để sản xuất năng lượng tái tạo.' },
        { title: 'Tiểu hành tinh kim loại 10 tỷ tỷ USD đang han gỉ', excerpt: 'Nghiên cứu cho thấy tiểu hành tinh này có chứa nhiều kim loại quý.' },
        { title: 'Tháng 7 nóng kỷ lục với hàng loạt thảm họa', excerpt: 'Tháng 7 vừa qua được ghi nhận là tháng nóng nhất trong lịch sử.' },
        { title: 'Tại sao kim loại phát ra tiếng rít?', excerpt: 'Một phân tích về nguyên nhân kim loại phát ra âm thanh khi cọ xát.' },
        { title: 'Cá sấu tìm cách ăn cóc mía độc', excerpt: 'Đưa ra những nghiên cứu mới về ảnh hưởng của cóc độc đến cá sấu.' },
        { title: 'Hài hòa lợi ích nhà khoa học và doanh nghiệp', excerpt: 'Nhu cầu hợp tác giữa khoa học và kinh doanh ngày càng trở nên thiết yếu.' },
    ];
    for (const link of linksToAdd) {
        // Điền tiêu đề và nội dung vào form
        await page.fill('//input[@id="note-title"]', link.title);
        await page.fill('//textarea[@id="note-content"]', link.excerpt);
        await page.click('//button[@id="add-note"]');
    }
    const searchTitle = linksToAdd[Math.floor(Math.random() * linksToAdd.length)].title;
    await page.fill('//input[@id="search"]', searchTitle);
});