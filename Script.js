// إضافة دوال للصفحات الجديدة

// إدارة نموذج الاتصال
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // هنا يمكنك إضافة كود إرسال البيانات للخادم
        console.log('بيانات النموذج:', formData);
        
        // عرض رسالة نجاح
        alert('شكراً لك! تم إرسال رسالتك بنجاح وسنتواصل معك قريباً.');
        
        // إعادة تعيين النموذج
        contactForm.reset();
    });
}

// تحميل إعلانات أدسنس عند التمرير
function loadAdsOnScroll() {
    const adContainers = document.querySelectorAll('.adsbygoogle');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // إعادة تحميل الإعلان عندما يصبح مرئياً
                if (window.adsbygoogle) {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                }
                observer.unobserve(entry.target);
            }
        });
    });
    
    adContainers.forEach(container => {
        observer.observe(container);
    });
}

// إدارة النقر على الإعلانات
function trackAdClicks() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.adsbygoogle')) {
            // تتبع النقر على الإعلانات
            console.log('تم النقر على إعلان أدسنس');
            // هنا يمكنك إضافة كود التحليلات
        }
    });
}

// تهيئة جميع الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    loadAdsOnScroll();
    trackAdClicks();
    
    // إضافة تأثيرات للعناصر عند التمرير
    const animatedElements = document.querySelectorAll('.about-text, .contact-form, .info-item');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        scrollObserver.observe(element);
    });
});
