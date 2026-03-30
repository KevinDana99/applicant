'use client'
import React, { useState } from 'react'
import { jsPDF } from 'jspdf'
import mockData from './mock.json'

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactInfo {
  fullName: string
  professionalTitle: string
  email: string
  phone: string
  linkedin: string
  location: string
  website: string
}

interface Experience {
  id: string
  jobTitle: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  achievements: string[]
}

interface Education {
  id: string
  degree: string
  fieldOfStudy: string
  institution: string
  location: string
  startDate: string
  endDate: string
  gpa: string
  honors: string
}

interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  url: string
}

interface Project {
  id: string
  name: string
  description: string
  technologies: string
  url: string
  startDate: string
  endDate: string
}

interface Language {
  id: string
  language: string
  proficiency: string
}

interface CVData {
  contact: ContactInfo
  summary: string
  experiences: Experience[]
  education: Education[]
  technicalSkills: string
  softSkills: string
  certifications: Certification[]
  projects: Project[]
  languages: Language[]
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 900,
    margin: '0 auto',
    padding: '32px 24px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: '#1a1a2e',
    margin: 0,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  section: {
    marginBottom: 32,
    border: '1px solid #e5e7eb',
    borderRadius: 8,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 12,
    borderBottom: '2px solid #3b82f6',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: '#1f2937',
    margin: 0,
  },
  sectionBadge: {
    fontSize: 12,
    fontWeight: 500,
    color: '#6b7280',
    backgroundColor: '#f3f4f6',
    padding: '2px 10px',
    borderRadius: 12,
  },
  row: {
    display: 'flex',
    gap: 16,
    marginBottom: 16,
  },
  rowThree: {
    display: 'flex',
    gap: 16,
    marginBottom: 16,
  },
  col2: {
    flex: 1,
  },
  col3: {
    flex: 1,
  },
  label: {
    display: 'block',
    fontSize: 13,
    fontWeight: 500,
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    fontSize: 14,
    border: '1px solid #d1d5db',
    borderRadius: 6,
    outline: 'none',
    transition: 'border-color 0.15s',
    boxSizing: 'border-box' as const,
  },
  textarea: {
    width: '100%',
    padding: '10px 12px',
    fontSize: 14,
    border: '1px solid #d1d5db',
    borderRadius: 6,
    outline: 'none',
    resize: 'vertical' as const,
    minHeight: 100,
    fontFamily: 'inherit',
    boxSizing: 'border-box' as const,
  },
  select: {
    width: '100%',
    padding: '10px 12px',
    fontSize: 14,
    border: '1px solid #d1d5db',
    borderRadius: 6,
    outline: 'none',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box' as const,
  },
  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  checkbox: {
    width: 16,
    height: 16,
    cursor: 'pointer',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#374151',
    cursor: 'pointer',
  },
  entryCard: {
    border: '1px solid #e5e7eb',
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    backgroundColor: '#f9fafb',
    position: 'relative' as const,
  },
  entryHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  entryNumber: {
    fontSize: 13,
    fontWeight: 600,
    color: '#3b82f6',
  },
  removeButton: {
    padding: '6px 12px',
    fontSize: 12,
    fontWeight: 500,
    color: '#ef4444',
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    borderRadius: 6,
    cursor: 'pointer',
  },
  addButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '10px 16px',
    fontSize: 14,
    fontWeight: 500,
    color: '#3b82f6',
    backgroundColor: '#eff6ff',
    border: '1px solid #bfdbfe',
    borderRadius: 6,
    cursor: 'pointer',
  },
  achievementRow: {
    display: 'flex',
    gap: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  achievementInput: {
    flex: 1,
    padding: '10px 12px',
    fontSize: 14,
    border: '1px solid #d1d5db',
    borderRadius: 6,
    outline: 'none',
    boxSizing: 'border-box' as const,
  },
  removeAchievement: {
    padding: '8px 12px',
    fontSize: 12,
    color: '#ef4444',
    backgroundColor: 'transparent',
    border: '1px solid #fecaca',
    borderRadius: 6,
    cursor: 'pointer',
  },
  addAchievement: {
    padding: '8px 12px',
    fontSize: 12,
    fontWeight: 500,
    color: '#3b82f6',
    backgroundColor: 'transparent',
    border: '1px dashed #bfdbfe',
    borderRadius: 6,
    cursor: 'pointer',
    marginTop: 4,
  },
  helpText: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 4,
  },
  actions: {
    display: 'flex',
    gap: 12,
    justifyContent: 'flex-end',
    marginTop: 32,
    paddingTop: 24,
    borderTop: '1px solid #e5e7eb',
  },
  saveButton: {
    padding: '12px 32px',
    fontSize: 15,
    fontWeight: 600,
    color: '#ffffff',
    backgroundColor: '#3b82f6',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
  },
  cancelButton: {
    padding: '12px 32px',
    fontSize: 15,
    fontWeight: 500,
    color: '#374151',
    backgroundColor: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: 6,
    cursor: 'pointer',
  },
  pdfButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 32px',
    fontSize: 15,
    fontWeight: 600,
    color: '#ffffff',
    backgroundColor: '#059669',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
  },
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const uid = () => Math.random().toString(36).slice(2, 10)

const createEmptyExperience = (): Experience => ({
  id: uid(),
  jobTitle: '',
  company: '',
  location: '',
  startDate: '',
  endDate: '',
  current: false,
  achievements: [''],
})

const createEmptyEducation = (): Education => ({
  id: uid(),
  degree: '',
  fieldOfStudy: '',
  institution: '',
  location: '',
  startDate: '',
  endDate: '',
  gpa: '',
  honors: '',
})

const createEmptyCertification = (): Certification => ({
  id: uid(),
  name: '',
  issuer: '',
  date: '',
  url: '',
})

const createEmptyProject = (): Project => ({
  id: uid(),
  name: '',
  description: '',
  technologies: '',
  url: '',
  startDate: '',
  endDate: '',
})

const createEmptyLanguage = (): Language => ({
  id: uid(),
  language: '',
  proficiency: '',
})

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ title, badge }: { title: string; badge?: string }) {
  return (
    <div style={styles.sectionHeader}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      {badge && <span style={styles.sectionBadge}>{badge}</span>}
    </div>
  )
}

function Field({
  label,
  children,
  helpText,
}: {
  label: string
  children: React.ReactNode
  helpText?: string
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={styles.label}>{label}</label>
      {children}
      {helpText && <p style={styles.helpText}>{helpText}</p>}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

const FormEdit = () => {
  const [cv, setCv] = useState<CVData>(mockData as CVData)

  // ── Contact handlers ──

  const updateContact = (field: keyof ContactInfo, value: string) => {
    setCv((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
    }))
  }

  // ── Experience handlers ──

  const addExperience = () => {
    setCv((prev) => ({
      ...prev,
      experiences: [...prev.experiences, createEmptyExperience()],
    }))
  }

  const removeExperience = (id: string) => {
    setCv((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((e) => e.id !== id),
    }))
  }

  const updateExperience = (id: string, field: keyof Experience, value: Experience[keyof Experience]) => {
    setCv((prev) => ({
      ...prev,
      experiences: prev.experiences.map((e) =>
        e.id === id ? { ...e, [field]: value } : e
      ),
    }))
  }

  const addAchievement = (expId: string) => {
    setCv((prev) => ({
      ...prev,
      experiences: prev.experiences.map((e) =>
        e.id === expId ? { ...e, achievements: [...e.achievements, ''] } : e
      ),
    }))
  }

  const removeAchievement = (expId: string, index: number) => {
    setCv((prev) => ({
      ...prev,
      experiences: prev.experiences.map((e) =>
        e.id === expId
          ? { ...e, achievements: e.achievements.filter((_, i) => i !== index) }
          : e
      ),
    }))
  }

  const updateAchievement = (expId: string, index: number, value: string) => {
    setCv((prev) => ({
      ...prev,
      experiences: prev.experiences.map((e) =>
        e.id === expId
          ? {
              ...e,
              achievements: e.achievements.map((a, i) => (i === index ? value : a)),
            }
          : e
      ),
    }))
  }

  // ── Education handlers ──

  const addEducation = () => {
    setCv((prev) => ({
      ...prev,
      education: [...prev.education, createEmptyEducation()],
    }))
  }

  const removeEducation = (id: string) => {
    setCv((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id),
    }))
  }

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setCv((prev) => ({
      ...prev,
      education: prev.education.map((e) =>
        e.id === id ? { ...e, [field]: value } : e
      ),
    }))
  }

  // ── Certification handlers ──

  const addCertification = () => {
    setCv((prev) => ({
      ...prev,
      certifications: [...prev.certifications, createEmptyCertification()],
    }))
  }

  const removeCertification = (id: string) => {
    setCv((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((c) => c.id !== id),
    }))
  }

  const updateCertification = (id: string, field: keyof Certification, value: string) => {
    setCv((prev) => ({
      ...prev,
      certifications: prev.certifications.map((c) =>
        c.id === id ? { ...c, [field]: value } : c
      ),
    }))
  }

  // ── Project handlers ──

  const addProject = () => {
    setCv((prev) => ({
      ...prev,
      projects: [...prev.projects, createEmptyProject()],
    }))
  }

  const removeProject = (id: string) => {
    setCv((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }))
  }

  const updateProject = (id: string, field: keyof Project, value: string) => {
    setCv((prev) => ({
      ...prev,
      projects: prev.projects.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      ),
    }))
  }

  // ── Language handlers ──

  const addLanguage = () => {
    setCv((prev) => ({
      ...prev,
      languages: [...prev.languages, createEmptyLanguage()],
    }))
  }

  const removeLanguage = (id: string) => {
    setCv((prev) => ({
      ...prev,
      languages: prev.languages.filter((l) => l.id !== id),
    }))
  }

  const updateLanguage = (id: string, field: keyof Language, value: string) => {
    setCv((prev) => ({
      ...prev,
      languages: prev.languages.map((l) =>
        l.id === id ? { ...l, [field]: value } : l
      ),
    }))
  }

  // ── PDF Generation (ATS-Optimized) ──

  const generatePDF = () => {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' })
    const pageWidth = doc.internal.pageSize.getWidth()
    const marginX = 20
    const contentWidth = pageWidth - marginX * 2
    let y = 20
    const maxY = 270
    const lineHeight = 5
    const sectionGap = 5

    const checkPageBreak = (needed: number) => {
      if (y + needed > maxY) {
        doc.addPage()
        y = 20
      }
    }

    const drawSectionTitle = (title: string) => {
      checkPageBreak(12)
      doc.setFontSize(11)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(0, 0, 0)
      doc.text(title, marginX, y)
      y += 1.5
      doc.setDrawColor(100, 100, 100)
      doc.setLineWidth(0.4)
      doc.line(marginX, y, pageWidth - marginX, y)
      y += sectionGap
    }

    const drawBullet = (text: string, indent: number = marginX + 5) => {
      const lines = doc.splitTextToSize('- ' + text, contentWidth - 5)
      for (const line of lines) {
        checkPageBreak(lineHeight)
        doc.setFontSize(10)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(0, 0, 0)
        doc.text(line, indent, y)
        y += lineHeight
      }
    }

    const drawLabelValue = (label: string, value: string, indent: number = marginX) => {
      checkPageBreak(lineHeight)
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(0, 0, 0)
      const labelWidth = doc.getTextWidth(label + ' ')
      doc.text(label, indent, y)
      doc.setFont('helvetica', 'normal')
      const valueLines = doc.splitTextToSize(value, contentWidth - labelWidth)
      doc.text(valueLines[0], indent + labelWidth, y)
      for (let i = 1; i < valueLines.length; i++) {
        y += lineHeight
        checkPageBreak(lineHeight)
        doc.text(valueLines[i], indent, y)
      }
      y += lineHeight
    }

    // ── Header / Contact ──
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(0, 0, 0)
    const fullName = cv.contact.fullName || 'Nombre Apellido'
    doc.text(fullName, pageWidth / 2, y, { align: 'center' })
    y += 7

    if (cv.contact.professionalTitle.trim()) {
      doc.setFontSize(12)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(0, 0, 0)
      doc.text(cv.contact.professionalTitle, pageWidth / 2, y, { align: 'center' })
      y += 7
    }

    // Contact info on multiple lines for ATS readability
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 0, 0)

    const contactLines: string[] = []
    const line1: string[] = []
    const line2: string[] = []
    if (cv.contact.location) line1.push(cv.contact.location)
    if (cv.contact.phone) line1.push('Phone: ' + cv.contact.phone)
    if (cv.contact.email) line1.push('Email: ' + cv.contact.email)
    if (cv.contact.linkedin) line2.push('LinkedIn: ' + cv.contact.linkedin)
    if (cv.contact.website) line2.push('Website: ' + cv.contact.website)

    if (line1.length > 0) contactLines.push(line1.join(' | '))
    if (line2.length > 0) contactLines.push(line2.join(' | '))

    for (const cLine of contactLines) {
      doc.text(cLine, pageWidth / 2, y, { align: 'center' })
      y += 4
    }

    // Separator line (dark gray, thin)
    y += 1
    doc.setDrawColor(100, 100, 100)
    doc.setLineWidth(0.4)
    doc.line(marginX, y, pageWidth - marginX, y)
    y += sectionGap

    // ── Professional Summary ──
    if (cv.summary.trim()) {
      drawSectionTitle('Professional Summary')
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(0, 0, 0)
      const summaryLines = doc.splitTextToSize(cv.summary, contentWidth)
      for (const line of summaryLines) {
        checkPageBreak(lineHeight)
        doc.text(line, marginX, y)
        y += lineHeight
      }
      y += sectionGap
    }

    // ── Professional Experience ──
    const filledExperiences = cv.experiences.filter(
      (e) => e.jobTitle || e.company
    )
    if (filledExperiences.length > 0) {
      drawSectionTitle('Professional Experience')

      for (const exp of filledExperiences) {
        checkPageBreak(20)

        // Job Title
        doc.setFontSize(10.5)
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(0, 0, 0)
        doc.text(exp.jobTitle || 'Job Title', marginX, y)

        // Dates (right-aligned)
        doc.setFontSize(9)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(0, 0, 0)
        const dateText = exp.current
          ? (exp.startDate || 'Start') + ' - Present'
          : (exp.startDate || 'Start') + ' - ' + (exp.endDate || 'End')
        doc.text(dateText, pageWidth - marginX, y, { align: 'right' })
        y += lineHeight

        // Company + Location
        doc.setFontSize(9.5)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(0, 0, 0)
        const companyLine = [exp.company, exp.location].filter(Boolean).join(', ')
        doc.text(companyLine, marginX, y)
        y += lineHeight + 1

        // Achievements
        const filledAchievements = exp.achievements.filter((a) => a.trim())
        for (const achievement of filledAchievements) {
          drawBullet(achievement)
        }
        y += 2
      }
      y += sectionGap - 6
    }

    // ── Education ──
    const filledEducation = cv.education.filter(
      (e) => e.degree || e.institution
    )
    if (filledEducation.length > 0) {
      drawSectionTitle('Education')

      for (const edu of filledEducation) {
        checkPageBreak(18)

        doc.setFontSize(10.5)
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(0, 0, 0)
        const degreeText = [edu.degree, edu.fieldOfStudy].filter(Boolean).join(' in ')
        doc.text(degreeText || 'Degree', marginX, y)

        // Dates
        doc.setFontSize(9)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(0, 0, 0)
        const dateText = [edu.startDate, edu.endDate].filter(Boolean).join(' - ')
        if (dateText) {
          doc.text(dateText, pageWidth - marginX, y, { align: 'right' })
        }
        y += lineHeight

        // Institution + Location
        doc.setFontSize(9.5)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(0, 0, 0)
        const instLine = [edu.institution, edu.location].filter(Boolean).join(', ')
        doc.text(instLine, marginX, y)
        y += lineHeight

        // GPA + Honors
        const extras = [edu.gpa ? 'GPA: ' + edu.gpa : '', edu.honors].filter(Boolean)
        if (extras.length > 0) {
          doc.setFontSize(9)
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(0, 0, 0)
          doc.text(extras.join(' | '), marginX, y)
          y += lineHeight
        }
        y += 2
      }
      y += sectionGap - 6
    }

    // ── Skills ──
    const hasTech = cv.technicalSkills.trim()
    const hasSoft = cv.softSkills.trim()
    if (hasTech || hasSoft) {
      drawSectionTitle('Skills')

      if (hasTech) {
        drawLabelValue('Technical Skills:', cv.technicalSkills)
      }

      if (hasSoft) {
        drawLabelValue('Soft Skills:', cv.softSkills)
      }
      y += sectionGap - 6
    }

    // ── Certifications ──
    const filledCerts = cv.certifications.filter((c) => c.name)
    if (filledCerts.length > 0) {
      drawSectionTitle('Certifications')

      for (const cert of filledCerts) {
        checkPageBreak(12)
        doc.setFontSize(10)
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(0, 0, 0)
        doc.text(cert.name, marginX, y)

        if (cert.date) {
          doc.setFontSize(9)
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(0, 0, 0)
          doc.text(cert.date, pageWidth - marginX, y, { align: 'right' })
        }
        y += lineHeight

        if (cert.issuer) {
          doc.setFontSize(9)
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(0, 0, 0)
          doc.text(cert.issuer, marginX, y)
          y += lineHeight
        }
        y += 1
      }
      y += sectionGap - 6
    }

    // ── Projects ──
    const filledProjects = cv.projects.filter((p) => p.name)
    if (filledProjects.length > 0) {
      drawSectionTitle('Projects')

      for (const proj of filledProjects) {
        checkPageBreak(15)
        doc.setFontSize(10.5)
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(0, 0, 0)
        doc.text(proj.name, marginX, y)

        const projDates = [proj.startDate, proj.endDate].filter(Boolean).join(' - ')
        if (projDates) {
          doc.setFontSize(9)
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(0, 0, 0)
          doc.text(projDates, pageWidth - marginX, y, { align: 'right' })
        }
        y += lineHeight

        if (proj.description) {
          doc.setFontSize(10)
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(0, 0, 0)
          const descLines = doc.splitTextToSize(proj.description, contentWidth)
          for (const line of descLines) {
            checkPageBreak(lineHeight)
            doc.text(line, marginX, y)
            y += lineHeight
          }
        }

        if (proj.technologies) {
          drawLabelValue('Technologies:', proj.technologies)
        }
        y += 2
      }
      y += sectionGap - 6
    }

    // ── Languages ──
    const filledLangs = cv.languages.filter((l) => l.language)
    if (filledLangs.length > 0) {
      drawSectionTitle('Languages')

      for (const lang of filledLangs) {
        checkPageBreak(lineHeight)
        doc.setFontSize(10)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(0, 0, 0)
        const langText = [lang.language, lang.proficiency].filter(Boolean).join(' - ')
        doc.text(langText, marginX, y)
        y += lineHeight
      }
    }

    // ── Save ──
    const fileName = cv.contact.fullName
      ? cv.contact.fullName.replace(/\s+/g, '_') + '_CV.pdf'
      : 'Curriculum_Vitae.pdf'
    doc.save(fileName)
  }

  // ── Submit ──

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('CV Data:', JSON.stringify(cv, null, 2))
  }

  // ── Render ──

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Editar Curriculum Vitae</h1>
        <p style={styles.subtitle}>
          Formato optimizado para ATS - Estructura basada en est&aacute;ndares de Harvard
        </p>
      </div>

      {/* ── 1. Contact Information ──────────────────────────────────────── */}
      <div style={styles.section}>
        <SectionHeader title="1. Informaci&oacute;n de Contacto" badge="Obligatorio" />

        <div style={styles.row}>
          <div style={styles.col2}>
            <Field label="Nombre Completo" helpText="Como aparece en documentos oficiales">
              <input
                style={styles.input}
                type="text"
                placeholder="Juan P&eacute;rez Garc&iacute;a"
                value={cv.contact.fullName}
                onChange={(e) => updateContact('fullName', e.target.value)}
              />
            </Field>
          </div>
          <div style={styles.col2}>
            <Field label="T&iacute;tulo Profesional" helpText="Ej: Senior Software Engineer">
              <input
                style={styles.input}
                type="text"
                placeholder="Senior Software Engineer"
                value={cv.contact.professionalTitle}
                onChange={(e) => updateContact('professionalTitle', e.target.value)}
              />
            </Field>
          </div>
          <div style={styles.col2}>
            <Field label="Correo Electr&oacute;nico">
              <input
                style={styles.input}
                type="email"
                placeholder="juan.perez@email.com"
                value={cv.contact.email}
                onChange={(e) => updateContact('email', e.target.value)}
              />
            </Field>
          </div>
        </div>

        <div style={styles.rowThree}>
          <div style={styles.col3}>
            <Field label="Tel&eacute;fono">
              <input
                style={styles.input}
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={cv.contact.phone}
                onChange={(e) => updateContact('phone', e.target.value)}
              />
            </Field>
          </div>
          <div style={styles.col3}>
            <Field label="LinkedIn">
              <input
                style={styles.input}
                type="url"
                placeholder="linkedin.com/in/juanperez"
                value={cv.contact.linkedin}
                onChange={(e) => updateContact('linkedin', e.target.value)}
              />
            </Field>
          </div>
          <div style={styles.col3}>
            <Field label="Ubicaci&oacute;n">
              <input
                style={styles.input}
                type="text"
                placeholder="Ciudad, Pa&iacute;s"
                value={cv.contact.location}
                onChange={(e) => updateContact('location', e.target.value)}
              />
            </Field>
          </div>
        </div>

        <Field label="Sitio Web / Portfolio" helpText="Opcional - incluye si tienes portafolio relevante">
          <input
            style={styles.input}
            type="url"
            placeholder="https://juanperez.dev"
            value={cv.contact.website}
            onChange={(e) => updateContact('website', e.target.value)}
          />
        </Field>
      </div>

      {/* ── 2. Professional Summary ─────────────────────────────────────── */}
      <div style={styles.section}>
        <SectionHeader title="2. Resumen Profesional" badge="Recomendado" />

        <Field
          label="Resumen"
          helpText="2-4 l&iacute;neas que destaquen tu valor profesional. Usa palabras clave de la oferta laboral."
        >
          <textarea
            style={styles.textarea}
            placeholder="Profesional de ingenier&iacute;a de software con 5+ a&ntilde;os de experiencia en desarrollo full-stack, especializado en React, Node.js y arquitectura de microservicios. Lider&eacute; equipos de hasta 8 desarrolladores y entregu&eacute; proyectos que incrementaron la retenci&oacute;n de usuarios en un 35%."
            value={cv.summary}
            onChange={(e) => setCv((prev) => ({ ...prev, summary: e.target.value }))}
          />
        </Field>
      </div>

      {/* ── 3. Work Experience ──────────────────────────────────────────── */}
      <div style={styles.section}>
        <SectionHeader title="3. Experiencia Laboral" badge="Obligatorio" />

        {cv.experiences.map((exp, idx) => (
          <div key={exp.id} style={styles.entryCard}>
            <div style={styles.entryHeader}>
              <span style={styles.entryNumber}>Experiencia #{idx + 1}</span>
              {cv.experiences.length > 1 && (
                <button
                  type="button"
                  style={styles.removeButton}
                  onClick={() => removeExperience(exp.id)}
                >
                  Eliminar
                </button>
              )}
            </div>

            <div style={styles.row}>
              <div style={styles.col2}>
                <Field label="T&iacute;tulo del Puesto">
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="Senior Software Engineer"
                    value={exp.jobTitle}
                    onChange={(e) => updateExperience(exp.id, 'jobTitle', e.target.value)}
                  />
                </Field>
              </div>
              <div style={styles.col2}>
                <Field label="Empresa">
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="Google"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                  />
                </Field>
              </div>
            </div>

            <div style={styles.rowThree}>
              <div style={styles.col3}>
                <Field label="Ubicaci&oacute;n">
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="San Francisco, CA"
                    value={exp.location}
                    onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                  />
                </Field>
              </div>
              <div style={styles.col3}>
                <Field label="Fecha de Inicio">
                  <input
                    style={styles.input}
                    type="month"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                  />
                </Field>
              </div>
              <div style={styles.col3}>
                <Field label="Fecha de Fin">
                  <input
                    style={styles.input}
                    type="month"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    disabled={exp.current}
                  />
                </Field>
              </div>
            </div>

            <div style={styles.checkboxRow}>
              <input
                style={styles.checkbox}
                type="checkbox"
                id={`current-${exp.id}`}
                checked={exp.current}
                onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
              />
              <label style={styles.checkboxLabel} htmlFor={`current-${exp.id}`}>
                Trabajo actual
              </label>
            </div>

            <Field
              label="Logros y Responsabilidades"
              helpText="Usa verbos de acci&oacute;n: Lider&eacute;, Desarroll&eacute;, Implement&eacute;, Optimic&eacute;. Cuantifica resultados."
            >
              {exp.achievements.map((achievement, achIdx) => (
                <div key={achIdx} style={styles.achievementRow}>
                  <span style={{ color: '#9ca3af', fontSize: 14 }}>-</span>
                  <input
                    style={styles.achievementInput}
                    type="text"
                    placeholder="Lider&eacute; la migraci&oacute;n a microservicios, reduciendo el tiempo de respuesta en un 40%"
                    value={achievement}
                    onChange={(e) => updateAchievement(exp.id, achIdx, e.target.value)}
                  />
                  {exp.achievements.length > 1 && (
                    <button
                      type="button"
                      style={styles.removeAchievement}
                      onClick={() => removeAchievement(exp.id, achIdx)}
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                style={styles.addAchievement}
                onClick={() => addAchievement(exp.id)}
              >
                + Agregar logro
              </button>
            </Field>
          </div>
        ))}

        <button type="button" style={styles.addButton} onClick={addExperience}>
          + Agregar Experiencia
        </button>
      </div>

      {/* ── 4. Education ────────────────────────────────────────────────── */}
      <div style={styles.section}>
        <SectionHeader title="4. Educaci&oacute;n" badge="Obligatorio" />

        {cv.education.map((edu, idx) => (
          <div key={edu.id} style={styles.entryCard}>
            <div style={styles.entryHeader}>
              <span style={styles.entryNumber}>Educaci&oacute;n #{idx + 1}</span>
              {cv.education.length > 1 && (
                <button
                  type="button"
                  style={styles.removeButton}
                  onClick={() => removeEducation(edu.id)}
                >
                  Eliminar
                </button>
              )}
            </div>

            <div style={styles.row}>
              <div style={styles.col2}>
                <Field label="Grado / T&iacute;tulo">
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="Bachelor of Science"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                  />
                </Field>
              </div>
              <div style={styles.col2}>
                <Field label="Campo de Estudio">
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="Computer Science"
                    value={edu.fieldOfStudy}
                    onChange={(e) => updateEducation(edu.id, 'fieldOfStudy', e.target.value)}
                  />
                </Field>
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.col2}>
                <Field label="Instituci&oacute;n">
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="Massachusetts Institute of Technology"
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                  />
                </Field>
              </div>
              <div style={styles.col2}>
                <Field label="Ubicaci&oacute;n">
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="Cambridge, MA"
                    value={edu.location}
                    onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                  />
                </Field>
              </div>
            </div>

            <div style={styles.rowThree}>
              <div style={styles.col3}>
                <Field label="Fecha de Inicio">
                  <input
                    style={styles.input}
                    type="month"
                    value={edu.startDate}
                    onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                  />
                </Field>
              </div>
              <div style={styles.col3}>
                <Field label="Fecha de Fin">
                  <input
                    style={styles.input}
                    type="month"
                    value={edu.endDate}
                    onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                  />
                </Field>
              </div>
              <div style={styles.col3}>
                <Field label="GPA" helpText="Opcional">
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="3.8/4.0"
                    value={edu.gpa}
                    onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                  />
                </Field>
              </div>
            </div>

            <Field label="Honores / Distinciones" helpText="Ej: Magna Cum Laude, Dean&rsquo;s List, Beca de Excelencia">
              <input
                style={styles.input}
                type="text"
                placeholder="Magna Cum Laude, Dean&rsquo;s List 2019-2022"
                value={edu.honors}
                onChange={(e) => updateEducation(edu.id, 'honors', e.target.value)}
              />
            </Field>
          </div>
        ))}

        <button type="button" style={styles.addButton} onClick={addEducation}>
          + Agregar Educaci&oacute;n
        </button>
      </div>

      {/* ── 5. Skills ───────────────────────────────────────────────────── */}
      <div style={styles.section}>
        <SectionHeader title="5. Habilidades" badge="ATS Cr&iacute;tico" />

        <Field
          label="Habilidades T&eacute;cnicas"
          helpText="Separa con comas. Incluye lenguajes, frameworks, herramientas, metodolog&iacute;as. Usa exactas palabras de la oferta laboral."
        >
          <textarea
            style={styles.textarea}
            placeholder="JavaScript, TypeScript, React, Node.js, Python, AWS, Docker, Kubernetes, PostgreSQL, MongoDB, Git, CI/CD, Agile, Scrum, REST APIs, GraphQL"
            value={cv.technicalSkills}
            onChange={(e) => setCv((prev) => ({ ...prev, technicalSkills: e.target.value }))}
          />
        </Field>

        <Field
          label="Habilidades Blandas"
          helpText="Liderazgo de equipos, comunicaci&oacute;n efectiva, resoluci&oacute;n de problemas, pensamiento cr&iacute;tico, trabajo en equipo."
        >
          <textarea
            style={styles.textarea}
            placeholder="Liderazgo de equipos, gesti&oacute;n de proyectos, comunicaci&oacute;n t&eacute;cnica, mentoria, resoluci&oacute;n de problemas, pensamiento anal&iacute;tico"
            value={cv.softSkills}
            onChange={(e) => setCv((prev) => ({ ...prev, softSkills: e.target.value }))}
          />
        </Field>
      </div>

      {/* ── 6. Certifications ───────────────────────────────────────────── */}
      <div style={styles.section}>
        <SectionHeader title="6. Certificaciones" badge="Opcional" />

        {cv.certifications.map((cert, idx) => (
          <div key={cert.id} style={styles.entryCard}>
            <div style={styles.entryHeader}>
              <span style={styles.entryNumber}>Certificaci&oacute;n #{idx + 1}</span>
              <button
                type="button"
                style={styles.removeButton}
                onClick={() => removeCertification(cert.id)}
              >
                Eliminar
              </button>
            </div>

            <div style={styles.row}>
              <div style={styles.col2}>
                <Field label="Nombre de la Certificaci&oacute;n">
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="AWS Solutions Architect - Associate"
                    value={cert.name}
                    onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                  />
                </Field>
              </div>
              <div style={styles.col2}>
                <Field label="Entidad Emisora">
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="Amazon Web Services"
                    value={cert.issuer}
                    onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                  />
                </Field>
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.col2}>
                <Field label="Fecha de Obtenci&oacute;n">
                  <input
                    style={styles.input}
                    type="month"
                    value={cert.date}
                    onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                  />
                </Field>
              </div>
              <div style={styles.col2}>
                <Field label="URL del Credencial" helpText="Enlace verificable si existe">
                  <input
                    style={styles.input}
                    type="url"
                    placeholder="https://credencial.aws/..."
                    value={cert.url}
                    onChange={(e) => updateCertification(cert.id, 'url', e.target.value)}
                  />
                </Field>
              </div>
            </div>
          </div>
        ))}

        <button type="button" style={styles.addButton} onClick={addCertification}>
          + Agregar Certificaci&oacute;n
        </button>
      </div>

      {/* ── 7. Projects ─────────────────────────────────────────────────── */}
      <div style={styles.section}>
        <SectionHeader title="7. Proyectos" badge="Opcional" />

        {cv.projects.map((proj, idx) => (
          <div key={proj.id} style={styles.entryCard}>
            <div style={styles.entryHeader}>
              <span style={styles.entryNumber}>Proyecto #{idx + 1}</span>
              <button
                type="button"
                style={styles.removeButton}
                onClick={() => removeProject(proj.id)}
              >
                Eliminar
              </button>
            </div>

            <div style={styles.row}>
              <div style={styles.col2}>
                <Field label="Nombre del Proyecto">
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="E-commerce Platform"
                    value={proj.name}
                    onChange={(e) => updateProject(proj.id, 'name', e.target.value)}
                  />
                </Field>
              </div>
              <div style={styles.col2}>
                <Field label="URL" helpText="Repositorio o demo en vivo">
                  <input
                    style={styles.input}
                    type="url"
                    placeholder="https://github.com/..."
                    value={proj.url}
                    onChange={(e) => updateProject(proj.id, 'url', e.target.value)}
                  />
                </Field>
              </div>
            </div>

            <Field label="Descripci&oacute;n">
              <textarea
                style={styles.textarea}
                placeholder="Plataforma de comercio electr&oacute;nico con carrito de compras, pasarela de pagos y panel de administraci&oacute;n. Maneja 10K+ productos con b&uacute;squeda en tiempo real."
                value={proj.description}
                onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
              />
            </Field>

            <div style={styles.row}>
              <div style={styles.col2}>
                <Field label="Tecnolog&iacute;as Utilizadas">
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="React, Node.js, PostgreSQL, Stripe API"
                    value={proj.technologies}
                    onChange={(e) => updateProject(proj.id, 'technologies', e.target.value)}
                  />
                </Field>
              </div>
              <div style={styles.col2}>
                <div style={styles.rowThree}>
                  <div style={styles.col3}>
                    <Field label="Inicio">
                      <input
                        style={styles.input}
                        type="month"
                        value={proj.startDate}
                        onChange={(e) => updateProject(proj.id, 'startDate', e.target.value)}
                      />
                    </Field>
                  </div>
                  <div style={styles.col3}>
                    <Field label="Fin">
                      <input
                        style={styles.input}
                        type="month"
                        value={proj.endDate}
                        onChange={(e) => updateProject(proj.id, 'endDate', e.target.value)}
                      />
                    </Field>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button type="button" style={styles.addButton} onClick={addProject}>
          + Agregar Proyecto
        </button>
      </div>

      {/* ── 8. Languages ────────────────────────────────────────────────── */}
      <div style={styles.section}>
        <SectionHeader title="8. Idiomas" badge="Opcional" />

        {cv.languages.map((lang, idx) => (
          <div key={lang.id} style={styles.entryCard}>
            <div style={styles.entryHeader}>
              <span style={styles.entryNumber}>Idioma #{idx + 1}</span>
              <button
                type="button"
                style={styles.removeButton}
                onClick={() => removeLanguage(lang.id)}
              >
                Eliminar
              </button>
            </div>

            <div style={styles.row}>
              <div style={styles.col2}>
                <Field label="Idioma">
                  <input
                    style={styles.input}
                    type="text"
                    placeholder="Ingl&eacute;s"
                    value={lang.language}
                    onChange={(e) => updateLanguage(lang.id, 'language', e.target.value)}
                  />
                </Field>
              </div>
              <div style={styles.col2}>
                <Field label="Nivel de Competencia">
                  <select
                    style={styles.select}
                    value={lang.proficiency}
                    onChange={(e) => updateLanguage(lang.id, 'proficiency', e.target.value)}
                  >
                    <option value="">Seleccionar nivel...</option>
                    <option value="Nativo">Nativo / Nativa</option>
                    <option value="Biling&uuml;e">Biling&uuml;e</option>
                    <option value="Avanzado">Avanzado (C1)</option>
                    <option value="Intermedio Alto">Intermedio Alto (B2)</option>
                    <option value="Intermedio">Intermedio (B1)</option>
                    <option value="B&aacute;sico">B&aacute;sico (A2)</option>
                    <option value="Principiante">Principiante (A1)</option>
                  </select>
                </Field>
              </div>
            </div>
          </div>
        ))}

        <button type="button" style={styles.addButton} onClick={addLanguage}>
          + Agregar Idioma
        </button>
      </div>

      {/* ── Actions ─────────────────────────────────────────────────────── */}
      <div style={styles.actions}>
        <button type="button" style={styles.cancelButton}>
          Cancelar
        </button>
        <button type="button" style={styles.pdfButton} onClick={generatePDF}>
          Descargar en PDF
        </button>
        <button type="submit" style={styles.saveButton}>
          Guardar CV
        </button>
      </div>
    </form>
  )
}

export default FormEdit
