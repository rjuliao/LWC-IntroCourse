public with sharing class AccountController {
    
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountList(){
        try {
            return [SELECT Id, Name, Type, Industry FROM Account LIMIT 5];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
