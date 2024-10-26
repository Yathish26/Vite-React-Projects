const subMenus = {
  // ---------------------Home Services----------------
  'Home Services': [
    { 'Cleaning Services': { location: '/cleaning' } },
    { 'Pest Control': { location: '/pest-control' } },
    { 'Plumbing': { location: '/plumbing' } },
    { 'Electrical Services': { location: '/electrical-services' } },
    { 'Home Repairs & Maintenance': { location: '/home-repairs-maintenance' } },
    { 'Landscaping & Gardening': { location: '/landscaping-gardening' } },
    { 'Moving & Relocation': { location: '/moving-relocation' } },
    { 'Painting & Wall Repair': { location: '/painting-wall-repair' } },
    { 'Carpentry': { location: '/carpentry' } },
    { 'Appliance Installation': { location: '/appliance-installation' } },
  ],
  
  // ---------------------Health & Wellness----------------
  'Health & Wellness': [
    { 'Personal Training': { location: '/personal-training' } },
    { 'Nutrition & Diet Counseling': { location: '/nutrition-diet-counseling' } },
    { 'Mental Health Counseling': { location: '/mental-health-counseling' } },
    { 'Massage Therapy': { location: '/massage-therapy' } },
    { 'Physiotherapy': { location: '/physiotherapy' } },
    { 'Yoga & Meditation': { location: '/yoga-meditation' } },
    { 'Chiropractic Care': { location: '/chiropractic-care' } },
    { 'Spa & Relaxation Services': { location: '/spa-relaxation-services' } },
    { 'Acupuncture': { location: '/acupuncture' } },
    { 'Dermatology': { location: '/dermatology' } },
  ],
  
  // ---------------------Automotive Services----------------
  'Automotive Services': [
    { 'Car Wash & Detailing': { location: '/car-wash-detailing' } },
    { 'Oil Change & Maintenance': { location: '/oil-change-maintenance' } },
    { 'Vehicle Repair & Service': { location: '/vehicle-repair-service' } },
    { 'Tire Repair & Replacement': { location: '/tire-repair-replacement' } },
    { 'Battery Replacement': { location: '/battery-replacement' } },
    { 'Auto Glass Repair': { location: '/auto-glass-repair' } },
    { 'Roadside Assistance': { location: '/roadside-assistance' } },
    { 'Vehicle Inspection': { location: '/vehicle-inspection' } },
    { 'Auto Painting & Wrapping': { location: '/auto-painting-wrapping' } },
    { 'Towing Services': { location: '/towing-services' } },
  ],
  
  // ---------------------Professional Services----------------
  'Professional Services': [
    { 'Legal Consulting': { location: '/legal-consulting' } },
    { 'Financial Planning': { location: '/financial-planning' } },
    { 'Tax Preparation & Accounting': { location: '/tax-preparation-accounting' } },
    { 'Business Consulting': { location: '/business-consulting' } },
    { 'Insurance Services': { location: '/insurance-services' } },
    { 'Real Estate Agents': { location: '/real-estate-agents' } },
    { 'Translation Services': { location: '/translation-services' } },
    { 'Marketing & Advertising': { location: '/marketing-advertising' } },
    { 'Human Resources Consulting': { location: '/human-resources-consulting' } },
    { 'Project Management': { location: '/project-management' } },
  ],
  
  // ---------------------Education----------------
  'Education': [
    { 'Tutoring & Homework Help': { location: '/tutoring-homework-help' } },
    { 'Language Classes': { location: '/language-classes' } },
    { 'Music & Dance Classes': { location: '/music-dance-classes' } },
    { 'Test Preparation (SAT, GRE, etc.)': { location: '/test-preparation' } },
    { 'Online Courses & Certifications': { location: '/online-courses-certifications' } },
    { 'Art & Craft Classes': { location: '/art-craft-classes' } },
    { 'Skill Development': { location: '/skill-development' } },
    { 'Computer & Coding Classes': { location: '/computer-coding-classes' } },
    { 'Cooking Classes': { location: '/cooking-classes' } },
    { 'Sports & Fitness Training': { location: '/sports-fitness-training' } },
  ],
  
  // ---------------------Events & Entertainment----------------
  'Events & Entertainment': [
    { 'Event Planning': { location: '/event-planning' } },
    { 'Photography & Videography': { location: '/photography-videography' } },
    { 'DJ Services': { location: '/dj-services' } },
    { 'Catering Services': { location: '/catering-services' } },
    { 'Party Rentals (Tables, Tents, etc.)': { location: '/party-rentals' } },
    { 'Live Performers & Bands': { location: '/live-performers-bands' } },
    { 'Decor & Balloon Services': { location: '/decor-balloon-services' } },
    { 'Florists': { location: '/florists' } },
    { 'Wedding Planners': { location: '/wedding-planners' } },
    { 'Audio/Visual Equipment Rental': { location: '/audio-visual-equipment-rental' } },
  ],
  
  // ---------------------Personal Services----------------
  'Personal Services': [
    { 'Personal Chef': { location: '/personal-chef' } },
    { 'Errand Running': { location: '/errand-running' } },
    { 'Pet Grooming & Boarding': { location: '/pet-grooming-boarding' } },
    { 'Personal Shoppers': { location: '/personal-shoppers' } },
    { 'Life Coaching': { location: '/life-coaching' } },
    { 'Fitness Coaching': { location: '/fitness-coaching' } },
    { 'Babysitting & Nanny Services': { location: '/babysitting-nanny-services' } },
    { 'Tailoring & Alterations': { location: '/tailoring-alterations' } },
    { 'Laundry & Dry Cleaning': { location: '/laundry-dry-cleaning' } },
    { 'House Sitting': { location: '/house-sitting' } },
  ],
  
  // ---------------------Technology Repair----------------
  'Technology Repair': [
    { 'Smartphone & Tablet Repair': { location: '/smartphone-tablet-repair' } },
    { 'Computer & Laptop Repair': { location: '/computer-laptop-repair' } },
    { 'Data Recovery Services': { location: '/data-recovery-services' } },
    { 'TV Repair': { location: '/tv-repair' } },
    { 'Home Networking': { location: '/home-networking' } },
    { 'Game Console Repair': { location: '/game-console-repair' } },
    { 'Printer & Scanner Repair': { location: '/printer-scanner-repair' } },
    { 'Security System Installation': { location: '/security-system-installation' } },
    { 'Smart Home Setup': { location: '/smart-home-setup' } },
    { 'Software Troubleshooting': { location: '/software-troubleshooting' } },
  ],
  
  // ---------------------Home & Interior----------------
  'Home & Interior': [
    { 'Interior Design': { location: '/interior-design' } },
    { 'Home Staging': { location: '/home-staging' } },
    { 'Custom Furniture & Carpentry': { location: '/custom-furniture-carpentry' } },
    { 'Flooring Installation': { location: '/flooring-installation' } },
    { 'HVAC Installation & Repair': { location: '/hvac-installation-repair' } },
    { 'Window Treatment & Blinds': { location: '/window-treatment-blinds' } },
    { 'Lighting & Electrical Fixtures': { location: '/lighting-electrical-fixtures' } },
    { 'Closet Organization': { location: '/closet-organization' } },
    { 'Kitchen & Bath Remodeling': { location: '/kitchen-bath-remodeling' } },
    { 'Upholstery Services': { location: '/upholstery-services' } },
  ],
  
  // ---------------------Delivery Services----------------
  'Delivery Services': [
    { 'Food Delivery': { location: '/food-delivery' } },
    { 'Grocery Delivery': { location: '/grocery-delivery' } },
    { 'Package & Courier Delivery': { location: '/package-courier-delivery' } },
    { 'Flower Delivery': { location: '/flower-delivery' } },
    { 'Document Delivery': { location: '/document-delivery' } },
    { 'Furniture & Appliance Delivery': { location: '/furniture-appliance-delivery' } },
    { 'Laundry Pickup & Delivery': { location: '/laundry-pickup-delivery' } },
    { 'Prescription Delivery': { location: '/prescription-delivery' } },
    { 'Meal Kit Delivery': { location: '/meal-kit-delivery' } },
    { 'Gift & Special Occasion Delivery': { location: '/gift-special-occasion-delivery' } },
  ],
}

export default subMenus;
