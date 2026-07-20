# Townfield Allotments Website

A modern, responsive multi-page website for Townfield Allotments built with Astro. This website features a beautiful design with consistent styling across all pages and includes everything needed to showcase your allotments and manage enquiries.

## 📁 Project Structure

```
src/
├── layouts/
│   └── Layout.astro          # Main layout component (shared by all pages)
└── pages/
    ├── index.astro           # Home page
    ├── about.astro           # About page
    ├── plots.astro           # Plot information page
    ├── location.astro        # Location & directions page
    ├── news.astro            # News & updates page
    └── contact.astro         # Contact form page
```

## 🎨 Design Features

- **Modern Color Scheme**: Forest green (#2d5016) primary with warm golden accents (#e8a84d)
- **Responsive Design**: Fully mobile-optimized, works beautifully on all screen sizes
- **Consistent Styling**: Shared layout ensures consistent branding across all pages
- **Interactive Elements**: Hover effects, smooth transitions, collapsible FAQs
- **Accessible**: Semantic HTML and good color contrast

## 📄 Pages Included

### 1. **Home** (`index.astro`)

- Eye-catching hero section with call-to-action buttons
- Quick feature highlights
- About preview section
- Links to other pages

### 2. **About** (`about.astro`)

- Detailed information about Townfield Allotments
- Community statistics
- Our values and mission
- Information about AFTA (Association of Frodsham Townfield Allotments)

### 3. **Plot Information** (`plots.astro`)

- Details about half plots, full plots, and multiple plot options
- Comparison table
- Site guidelines and rules
- Interactive FAQ section
- Customer testimonials area ready for content

### 4. **Location** (`location.astro`)

- Full address and contact details
- Directions by car, bus, bike, and foot
- Parking information
- What's nearby (shops, cafes, etc.)
- Accessibility information
- Site visit booking information

### 5. **News** (`news.astro`)

- Latest news and updates
- Newsletter subscription area
- Featured news section
- Sample news articles (easily editable)

### 6. **Contact** (`contact.astro`)

- Comprehensive contact form
- Multiple contact methods
- Quick reference contact info
- Common questions FAQ
- Form validation and feedback

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Set up your Astro project** (if starting fresh):

```bash
npm create astro@latest townfield-allotments
cd townfield-allotments
npm install
```

2. **Replace the source files** with the provided `.astro` files:
   - Copy `Layout.astro` to `src/layouts/`
   - Copy all page files to `src/pages/`

3. **Run the development server**:

```bash
npm run dev
```

4. **Open in your browser**: Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized version in the `dist/` folder ready for deployment.

## 🛠️ Customization

### Colors

All colors are defined in CSS variables in the Layout component. To change colors:

1. Open `Layout.astro`
2. Find the `:root` style section
3. Modify these variables:
   - `--primary`: Main green color
   - `--primary-light`: Lighter green
   - `--accent`: Golden accent color
   - `--accent-light`: Lighter gold
   - `--text-dark`: Dark text color
   - `--text-light`: Gray text color
   - `--bg-light`: Light background color

### Content Updates

Each page is straightforward to edit:

- **Home**: Edit the hero section, features, and about preview
- **About**: Update the community stats, values, and AFTA information
- **Plots**: Modify plot sizes, features, comparison table, and FAQs
- **Location**: Update address, directions, parking, and accessibility info
- **News**: Edit the `newsItems` array at the top of the file
- **Contact**: Update contact methods and add real email addresses

### Forms Integration

The contact form currently shows a success message. To actually receive enquiries:

#### Option 1: Netlify Forms (Recommended for Netlify hosting)

1. In `contact.astro`, add `netlify` attribute to the form:

```astro
<form netlify>
  <!-- form fields -->
</form>
```

2. Deploy to Netlify and enable form submissions in your Netlify dashboard

#### Option 2: External Service

Integrate with services like:

- Formspree (formspree.io)
- EmailJS (emailjs.com)
- Basin (usebasin.com)

### News Management

Edit the `newsItems` array in `news.astro` to add/update news:

```javascript
const newsItems = [
  {
    id: 1,
    date: "Month Year",
    title: "Article Title",
    excerpt: "Short summary...",
    content: "Full article content...",
    author: "Author Name",
  },
  // Add more items...
];
```

## 📱 Responsive Features

- Mobile-optimized navigation
- Touch-friendly buttons and links
- Flexible grid layouts that adapt to screen size
- Readable font sizes on all devices

## ♿ Accessibility

- Semantic HTML structure
- Good color contrast ratios
- Alt text support for images
- Keyboard navigation support
- ARIA labels where appropriate

## 🔍 SEO

- Unique page titles and descriptions
- Semantic HTML
- Open Graph meta tags ready to add
- Mobile-friendly design
- Fast loading times

## 📧 Newsletter

The newsletter signup form is ready to integrate with services like:

- Mailchimp
- ConvertKit
- Substack
- EmailJS

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Deploy to Vercel

1. Import project to Vercel
2. Vercel automatically detects Astro
3. Deploy with zero configuration

### Deploy to Other Platforms

The `npm run build` command creates a static site that can be deployed anywhere.

## 🎯 Next Steps

1. **Update Contact Information**: Add real email addresses and phone numbers
2. **Add Images**: Replace emoji placeholders with real photos of the allotments
3. **Integrate Forms**: Connect the contact form to your preferred email service
4. **Add Google Maps**: Embed an actual map on the location page
5. **Newsletter Setup**: Connect to your email marketing platform
6. **Analytics**: Add Google Analytics or similar
7. **Custom Domain**: Add your domain (e.g., townfield-allotments.co.uk)

## 📝 Content Tips

- **About Page**: Add personal stories from plotholders
- **News Page**: Update regularly with growing tips, community events
- **Plot Page**: Add before/after photos of plots
- **Location Page**: Add photos of the site and surrounding area
- **Contact Page**: Include testimonials from happy plotholders

## 🐛 Troubleshooting

**Navigation links not working?**

- Ensure all `.astro` files are in the `src/pages/` directory
- File names become URLs (e.g., `about.astro` → `/about`)

**Styling looks broken?**

- Make sure the `Layout.astro` is in `src/layouts/`
- Check that each page imports the Layout with: `import Layout from '../layouts/Layout.astro';`

**Images not loading?**

- Place images in `src/assets/` and import them in your Astro files
- Or use external image URLs with `<img src="url">`

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## 💡 Features Ready to Add

- [ ] Photo gallery section
- [ ] Community member testimonials
- [ ] Event calendar
- [ ] Growing guides/resources
- [ ] Plotholders directory
- [ ] Blog system
- [ ] Dark mode toggle
- [ ] Multi-language support

---

**Happy Growing! 🌱**

For questions or support, contact your web developer or visit the Astro community forums.
