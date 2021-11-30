import ScrollReveal from 'scrollreveal';
import srConfig from './srConfig';

const sr = ScrollReveal();

const sectionReveal = (target: any, delay?: number) => {
  if (target === null || undefined) return;
  sr.reveal(target, srConfig(delay));
};

export default sectionReveal;
