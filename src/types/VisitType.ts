type VisitType = {
  docIcon: string;
  docSpec: string;
  docName: string;
  date: string;
  time: string;
  address: {
    streetName: string;
    streetAddress: string;
  };
  visitStatus: string
    | 'Completed'
    | 'Scheduled'
    | 'In-Consultation'
    | 'Missed'
    | 'Cancelled';
};

export default VisitType;
