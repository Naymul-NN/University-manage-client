
import { useGetAllsemesterQuery } from "../../../redux/academicSemester/academicSemesterApi";

const AcademicSemester = () => { 

    const {data} = useGetAllsemesterQuery(undefined);
    console.log(data)
return ( 
     <div>
          <h1> This is AcademicSemester page .. </h1>
     </div>
);
};

export default AcademicSemester;