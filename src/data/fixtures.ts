export const tools = [
 { name: 'Academic Writing', description: 'Find your words. Make them count.', icon: 'writing', color: 'purple', prompt: 'Help me outline an academic essay' },
 { name: 'Smart Quiz Generator', description: 'Turn what you know into confidence.', icon: 'quiz', color: 'blue', prompt: 'Create a quiz about cell biology' },
 { name: 'Smart Notes', description: 'Less information. More understanding.', icon: 'notes', color: 'amber', prompt: 'Help me organize my study notes' },
 { name: 'AI Flashcards', description: 'Small cards. Lasting knowledge.', icon: 'cards', color: 'pink', prompt: 'Create flashcards on photosynthesis' },
 { name: 'Subject Tutors', description: 'A little guidance. A big breakthrough.', icon: 'tutor', color: 'green', prompt: 'Explain a difficult concept step by step' },
 { name: 'Document Analysis', description: 'Go from pages to the point.', icon: 'document', color: 'cyan', prompt: 'Help me understand a document' },
]
export const conversations = [
 { title: 'Understanding cellular respiration', subject: 'Biology', time: '2 hours ago', color: 'green' },
 { title: 'Essay outline: the future of AI', subject: 'Academic writing', time: 'Yesterday', color: 'purple' },
 { title: 'Integration by parts, explained', subject: 'Mathematics', time: 'Yesterday', color: 'blue' },
]
export const initialTasks = [
 { id: 1, title: 'Review biology flashcards', detail: 'Biology · 15 min', date: 'Today', done: false },
 { id: 2, title: 'Finish calculus problem set', detail: 'Mathematics · 30 min', date: 'Today', done: false },
 { id: 3, title: 'Read chapter 04', detail: 'Literature · 20 min', date: 'Tomorrow', done: true },
]
export const allowances = [['AI questions', 20], ['Images', 12], ['PDF uploads', 3], ['Audio summaries', 2], ['Quizzes', 5], ['Flashcard generations', 5], ['Document analyses', 3]] as const
