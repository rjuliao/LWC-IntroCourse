public with sharing class OppController {

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(){
        try {
            return [SELECT StageName, Name FROM Opportunity];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
