//return{ data, impact, servereImpact };
const covid19ImpactEstimator = (data) => {
    const estimator = chain(
        //Challenege 1
        estimateCurrentlyInfected,
        estimateProjectedInfections,

        //Challenge 2
        estimateSevereCases,
        estimateBedSpaceAvailability,

        //Challenge 3
        estimateCasesForICU,
        estimateCasesForVentilators,
        estimateDollarsInFlight
    );
    return estimator({
        data,   //input data gotten
        impact: {},  //best case estimation
        severeImpact: {}  //severe case estimation
    });
};

export default covid19ImpactEstimator;
