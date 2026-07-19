import { motion } from 'framer-motion';
import { teamData, type TeamMember, type TeamRoleBadge } from '../../data/teamData';

type TeamCardProps = { member: TeamMember; index: number };

const roleToBadgeStyles = (_role: TeamRoleBadge, accentColor: string) => {
  return {
    background: `linear-gradient(135deg, ${accentColor}26 0%, ${accentColor}12 100%)`,
    borderColor: `${accentColor}55`,
  };
};

const TeamCard = ({ member, index }: TeamCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative bg-white/55 backdrop-blur-xl rounded-[1.75rem] border border-white/70 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 h-full overflow-hidden"
    >
      {/* Equal-height card structure */}
      <div className="p-6 sm:p-8 flex flex-col h-full">
        <div className="flex items-start gap-5">
          <div className="relative shrink-0">
            <motion.div
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.25 }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-white/70 border border-white/70 shadow-lg shadow-black/5 flex items-center justify-center"
            >
              <img
                src={member.image}
                alt={`Profile photo of ${member.name}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div
              className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at 30% 30%, ${member.accentColor}55, transparent 55%)` }}
              aria-hidden="true"
            />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="sv-card-title text-gray-900 font-heading font-bold tracking-tight">
                {member.name}
              </h3>
              <span
                className="inline-flex items-center px-3 py-1.5 rounded-full font-semibold border sv-badge"
                style={roleToBadgeStyles(member.role, member.accentColor)}
              >
                {member.role}
              </span>
            </div>
            <p className="mt-2 text-gray-600 text-sm sm:text-base font-light">
              {member.position}
            </p>
          </div>
        </div>

        {/* Contribution clamped to 2 lines */}
        <p className="mt-5 text-gray-700 leading-relaxed text-sm sm:text-base font-light line-clamp-4">
          {member.contribution}
        </p>

        <div className="mt-auto pt-6">
          <div className="h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
        </div>
      </div>
    </motion.article>
  );
};

const TeamSection = () => {
  return (
    <section className="sv-section bg-white relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Title / Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          transition={{ duration: 0.45 }}
          className="text-center mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/15 text-primary font-semibold sv-badge">
            <span aria-hidden="true">👥</span>
            Organizing Committee
          </div>

          <h2 className="sv-heading-2 mt-5 font-heading font-extrabold tracking-tight text-gray-900">
            Meet the Team Behind SkillVerse
          </h2>
          <div className="mt-3 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" aria-hidden="true" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mt-5 sv-body text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            SkillVerse is brought to life through the dedication, creativity, and collaboration of our Student Council members. Every
            detail—from planning and branding to technology and promotion—is the result of teamwork and shared vision.
          </motion.p>
        </motion.div>

        {/* Team Grid (CSS Grid + exact 3×2 / 2×3 / 1×6 responsive) */}
        <div className="sv-team-grid mx-auto">

          {teamData.map((member, index) => (
            <TeamCard member={member} index={index} key={member.name} />
          ))}
        </div>



        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14 sm:mt-16 flex justify-center"
        >
          <blockquote className="max-w-3xl text-center text-gray-700">
            <p className="sv-heading-3 font-light leading-relaxed">
              “Great events are created when passionate individuals come together with a shared purpose, creativity, and dedication.”
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;


