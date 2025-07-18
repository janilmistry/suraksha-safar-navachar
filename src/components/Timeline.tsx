import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, Clock, Award } from 'lucide-react';

const Timeline = () => {
  const rounds = [
    {
      id: 1,
      title: "Online Registration & Abstract Submission",
      period: "21 જુલાઈ - 1 ઓગસ્ટ",
      status: "upcoming",
      icon: CheckCircle,
      details: [
        "નામ, કેટેગરી, ટીમ મેમ્બરો",
        "1-પેજ આઈડિયા સમરી",
        "ફોટો / સ્કેચ / ટૂલ માહિતી"
      ],
      criteria: ["નવીનતા", "વ્યાવહારિકતા", "સમાજ પર ઇમ્પેક્ટ"]
    },
    {
      id: 2,
      title: "Idea Validation & Mentorship",
      period: "2 ઓગસ્ટ - 10 ઓગસ્ટ",
      status: "upcoming",
      icon: Clock,
      details: [
        "Shortlisted ટીમો માટે મેન્ટરિંગ",
        "ડિઝાઇન ટેમ્પલેટ અને સેમિનાર",
        "Zoom Mentoring સેશન",
        "પ્રોગ્રેસ રિપોર્ટ સબમિશન"
      ],
      output: ["Initial Mockup / Layout", "Concept PPT", "Pitch Script"]
    },
    {
      id: 3,
      title: "Prototype / Campaign Presentation",
      period: "12 ઓગસ્ટ - 20 ઓગસ્ટ",
      status: "upcoming",
      icon: Award,
      details: [
        "Virtual OR Physical પ્રેઝન્ટેશન",
        "Pre-recorded Demo (8 મિનિટ)",
        "Final Presentation",
        "Q&A with Judges (5 મિનિટ)"
      ],
      criteria: ["Creativity", "Implementation Feasibility", "Safety Impact", "Scalability", "Teamwork"]
    }
  ];

  const finalEvent = {
    title: "Final Award Ceremony & Exhibition",
    date: "25 ઓગસ્ટ, ૢ025",
    venue: "Government Polytechnic, Ahmedabad",
    program: [
      "Chief Guest Speech",
      "Top 10 Presentations Live",
      "Model Display",
      "Documentary Screening",
      "Awards & Certificates"
    ]
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            ચેલેન્જના રાઉન્ડ્સ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ત્રણ મુખ્ય રાઉન્ડ્સ દ્વારા તમારા આઈડિયાને વાસ્તવિકતામાં ફેરવો
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 mb-16">
          {rounds.map((round, index) => (
            <div key={round.id} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Timeline Line */}
              {index < rounds.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-primary/30 z-0 hidden md:block"></div>
              )}

              <Card className="bg-white border-0 shadow-card hover:shadow-float transition-all duration-300 relative z-10">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                      <round.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-heading font-bold text-foreground mb-2">
                        Round {round.id}: {round.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{round.period}</span>
                        <Badge variant="outline" className="ml-auto">
                          {round.status === "upcoming" ? "આગામી" : "પૂર્ણ"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">સામગ્રી:</h4>
                      <ul className="space-y-2">
                        {round.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-muted-foreground">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      {round.criteria && (
                        <>
                          <h4 className="font-semibold text-foreground mb-3">માપદંડ:</h4>
                          <ul className="space-y-2">
                            {round.criteria.map((criterion, idx) => (
                              <li key={idx} className="flex items-center text-muted-foreground">
                                <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                                {criterion}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {round.output && (
                        <>
                          <h4 className="font-semibold text-foreground mb-3">Output:</h4>
                          <ul className="space-y-2">
                            {round.output.map((output, idx) => (
                              <li key={idx} className="flex items-center text-muted-foreground">
                                <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                                {output}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Final Event */}
        <Card className="bg-gradient-hero text-white border-0 shadow-float">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-3xl font-heading font-bold mb-4">
              {finalEvent.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">📅 તારીખ</h4>
                <p>{finalEvent.date}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📍 સ્થળ</h4>
                <p>{finalEvent.venue}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">પ્રોગ્રામ:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {finalEvent.program.map((item, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-3 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Timeline;