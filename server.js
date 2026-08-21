import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// Sample Data Routes
app.get('/api/services', (req, res) => {
  res.json([
    {
      id: 1,
      icon: '🎯',
      title: 'Brand Strategy',
      description: 'Build a powerful brand identity that stands out in the market and resonates with your audience.'
    },
    {
      id: 2,
      icon: '💻',
      title: 'Web Development',
      description: 'High-performing websites built for the future with cutting-edge technology and best practices.'
    },
    {
      id: 3,
      icon: '📢',
      title: 'Digital Marketing',
      description: 'Data-driven marketing campaigns that deliver measurable results and drive real growth.'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Social Media',
      description: 'Engage your audience and grow your community with strategic social media management.'
    },
    {
      id: 5,
      icon: '✍️',
      title: 'Content Creation',
      description: 'Creative content that connects with your audience and converts prospects into customers.'
    },
    {
      id: 6,
      icon: '📊',
      title: 'Analytics & SEO',
      description: 'Improve visibility and rank higher on search with data-driven SEO strategies.'
    }
  ]);
});

app.get('/api/portfolio', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'Web Development',
      image: '/portfolio/ecommerce.jpg',
      description: 'UI/UX Design, Development',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Brand Identity',
      category: 'Branding',
      image: '/portfolio/branding.jpg',
      description: 'Branding, Logo, Guidelines',
      tags: ['Logo Design', 'Brand Strategy']
    },
    {
      id: 3,
      title: 'Digital Campaign',
      category: 'Marketing',
      image: '/portfolio/campaign.jpg',
      description: 'Marketing, Strategy, Ads',
      tags: ['Social Media', 'Ads']
    }
  ]);
});

app.get('/api/testimonials', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Inc',
      image: '/testimonials/sarah.jpg',
      text: 'The team exceeded our expectations. Their strategic approach and creative solutions transformed our brand presence completely.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Growth Ventures',
      image: '/testimonials/michael.jpg',
      text: 'Outstanding service and results. They understood our vision and delivered a website that truly represents our brand values.'
    },
    {
      id: 3,
      name: 'Emma Williams',
      company: 'Creative Studio',
      image: '/testimonials/emma.jpg',
      text: 'Highly professional and creative team. They brought fresh ideas and delivered results that exceeded our ROI targets.'
    }
  ]);
});

app.get('/api/pricing', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Starter',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Brand Strategy Consultation',
        'Logo Design',
        'Basic Website',
        'Social Media Setup',
        '1 Month Support'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'For growing businesses',
      features: [
        'Everything in Starter',
        'Full Website Development',
        'Social Media Management',
        'Content Creation',
        'Basic SEO',
        '3 Months Support'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Advanced SEO & Analytics',
        'E-Commerce Solutions',
        'Custom Integrations',
        'Dedicated Account Manager',
        '12 Months Support'
      ],
      popular: false
    }
  ]);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // Here you would typically save to database or send email
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ success: true, message: 'Thank you for reaching out. We will get back to you soon!' });
});

// Serve React build for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
