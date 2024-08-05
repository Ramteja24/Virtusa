'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  LaptopOutlined,
  SafetyOutlined,
  CodeOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Seamless Compatibility Check',
      description:
        'Ensure your device meets all technical requirements for a smooth exam experience.',
      icon: <LaptopOutlined />,
    },
    {
      heading: 'Advanced Face Recognition',
      description:
        'Verify student identities with cutting-edge face recognition technology.',
      icon: <SafetyOutlined />,
    },
    {
      heading: 'Comprehensive Exam Portal',
      description:
        'Access a secure and user-friendly portal for coding and aptitude tests.',
      icon: <CodeOutlined />,
    },
    {
      heading: 'Enhanced Security',
      description:
        'Maintain the integrity of exams with robust security features.',
      icon: <UserOutlined />,
    },
    {
      heading: 'User-Friendly Interface',
      description: 'Navigate exams effortlessly with our intuitive design.',
      icon: <SmileOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Student',
      content:
        'This app made my online exams stress-free and secure. Highly recommend!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Educator',
      content:
        'A game-changer for maintaining exam integrity. Our institution loves it!',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Brown',
      designation: 'Certification Body',
      content:
        'Reliable and efficient. It’s the best solution for online assessments.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Perfect for individual students',
      monthly: 9,
      yearly: 69,
      features: ['Compatibility Check', 'Face Recognition'],
    },
    {
      title: 'Pro',
      description: 'Ideal for educational institutions',
      monthly: 29,
      yearly: 249,
      features: ['All Basic Features', 'Advanced Security', 'Priority Support'],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'Best for large organizations',
      monthly: 49,
      yearly: 399,
      features: [
        'All Pro Features',
        'Custom Integrations',
        'Dedicated Account Manager',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'How does the compatibility check work?',
      answer:
        'Our app runs a series of tests to ensure your device meets the technical requirements for online exams.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely. We use advanced encryption and security protocols to protect your data.',
    },
    {
      question: 'Can I try the app for free?',
      answer: 'Yes, we offer a 14-day free trial for all new users.',
    },
    {
      question: 'What support options are available?',
      answer: 'We offer 24/7 customer support via chat, email, and phone.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Create your account in just a few minutes.',
    },
    {
      heading: 'Run Compatibility Test',
      description: 'Ensure your device is ready for the exam.',
    },
    {
      heading: 'Verify Identity',
      description: 'Use face recognition to confirm your identity.',
    },
    {
      heading: 'Take Exam',
      description: 'Access the exam portal and start your test.',
    },
  ]

  const painPoints = [
    {
      emoji: '💻',
      title: 'Technical Issues',
    },
    {
      emoji: '😓',
      title: 'Stressful Exam Environment',
    },
    {
      emoji: '📉',
      title: 'Compromised Exam Integrity',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Revolutionize Your Online Exams"
        subtitle="Experience stress-free, secure, and seamless online exams with our innovative app."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/BAM4j4-virtusa-PZVe"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy students and educators"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="The Challenges of Online Exams"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Exam Excellence"
        subtitle="Our app provides the tools you need for a flawless online exam experience."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories"
        subtitle="Hear from those who have transformed their online exam experience."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose Your Plan"
        subtitle="Find the perfect plan to meet your needs and ensure exam success."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Transform Your Exam Experience?"
        subtitle="Join thousands of satisfied users and start your journey today."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
