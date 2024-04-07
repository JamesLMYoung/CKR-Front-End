import { useState } from "react";
import Collapsible from "react-collapsible";
import { useFilterStore } from '../../store';
import "./FileForm.css";

export default function FileForm() {
    const [checkedContentDistribution, setCheckedContentDistribution] = useState('Any')
    const [checkedContentMaturity, setCheckedContentMaturity] = useState('Any')
    const [checkedContentType, setCheckedContentType] = useState('Any')
    const [checkedEditions, setCheckedEditions] = useState('Any')
    const [checkedIndustry, setCheckedIndustry] = useState('Any')
    const [checkedUsecase, setCheckedUsecase] = useState('Any')
    const [listedOperation, setListedOperation] = useState<string[]>([])
    const [listedComponent, setListedComponent] = useState<string[]>([])

    const changeFileFilter = useFilterStore(state => state.changeFileFilter);

    const onContentDistributionValueChange = (item: string) => () => {
        setCheckedContentDistribution(item);
    }
    const onContentMaturityValueChange = (item: string) => () => {
        setCheckedContentMaturity(item);
    }
    const onContentTypeValueChange = (item: string) => () => {
        setCheckedContentType(item);
    }
    const onEditionsValueChange = (item: string) => () => {
        setCheckedEditions(item);
    }
    const onIndustryValueChange = (item: string) => () => {
        setCheckedIndustry(item);
    }
    const onUsecaseValueChange = (item: string) => () => {
        setCheckedUsecase(item);
    }
    const onOperationValueChange = (item: string) => (event : React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setListedOperation(prevState => [...prevState, item]);
        } else {
            setListedOperation(prevState => prevState.filter(operation => operation !== item));
        }
    }
    const onComponentValueChange = (item: string) => (event : React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setListedComponent(prevState => [...prevState, item]);
        } else {
            setListedComponent(prevState => prevState.filter(component => component !== item));
        }
    }

    const formSubmit = (
        d: string, 
        cm: string, 
        ct: string, 
        ed: string,
        i: string,
        uc: String,
        o: Array<string>,
        c: Array<string>
      ) => (e: any) => {
          e.preventDefault();
          changeFileFilter([d,cm,ct,ed,i,uc,o,c]);
  }
    return (
        <form onSubmit={formSubmit(
            checkedContentDistribution,
            checkedContentMaturity,
            checkedContentType,
            checkedEditions,
            checkedIndustry,
            checkedUsecase,
            listedOperation,
            listedComponent)}>
          <Collapsible trigger="ContentDistribution">
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Any"
                    checked={checkedContentDistribution === "Any"}
                    onChange={onContentDistributionValueChange('Any')}
                />
                Any
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Public"
                    checked={checkedContentDistribution === "Public"}
                    onChange={onContentDistributionValueChange('Public')}
                />
                Public
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Neo4j"
                    checked={checkedContentDistribution === "Neo4j"}
                    onChange={onContentDistributionValueChange('Neo4j')}
                />
                Neo4j
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="PS only"
                    checked={checkedContentDistribution === "PS only"}
                    onChange={onContentDistributionValueChange('PS only')}
                />
                PS only
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="EMEA PS only"
                    checked={checkedContentDistribution === "EMEA PS only"}
                    onChange={onContentDistributionValueChange('EMEA PS only')}
                />
                EMEA PS only
                </label>
            </div>
          </Collapsible>
          <Collapsible trigger="Content Maturity">
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Any"
                    checked={checkedContentMaturity === "Any"}
                    onChange={onContentMaturityValueChange('Any')}
                />
                Any
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Initial drafts"
                    checked={checkedContentMaturity === "Initial drafts"}
                    onChange={onContentMaturityValueChange('Initial drafts')}
                />
                Initial drafts
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="WIP"
                    checked={checkedContentMaturity === "WIP"}
                    onChange={onContentMaturityValueChange('WIP')}
                />
                WIP
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Complete"
                    checked={checkedContentMaturity === "Complete"}
                    onChange={onContentMaturityValueChange('Complete')}
                />
                Complete
                </label>
            </div>
          </Collapsible>
          <Collapsible trigger="Content Type">
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Any"
                    checked={checkedContentType === "Any"}
                    onChange={onContentTypeValueChange('Any')}
                />
                Any
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Best Practice"
                    checked={checkedContentType === "Best Practice"}
                    onChange={onContentTypeValueChange('Best Practice')}
                />
                Best Practice
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Client Training Material"
                    checked={checkedContentType === "Client Training Material"}
                    onChange={onContentTypeValueChange('Client Training Material')}
                />
                Client Training Material
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Customer Story"
                    checked={checkedContentType === "Customer Story"}
                    onChange={onContentTypeValueChange('Customer Story')}
                />
                Customer Story
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Data Model"
                    checked={checkedContentType === "Data Model"}
                    onChange={onContentTypeValueChange('Data Model')}
                />
                Data Model
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Demo"
                    checked={checkedContentType === "Demo"}
                    onChange={onContentTypeValueChange('Demo')}
                />
                Demo
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="How To"
                    checked={checkedContentType === "How To"}
                    onChange={onContentTypeValueChange('How To')}
                />
                How To
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Issue & Solution"
                    checked={checkedContentType === "Issue & Solution"}
                    onChange={onContentTypeValueChange("Issue & Solution")}
                />
                Issue & Solution
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Sales Enablement"
                    checked={checkedContentType === "Sales Enablement"}
                    onChange={onContentTypeValueChange("Sales Enablement")}
                />
                Sales Enablement
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Solution Assessment"
                    checked={checkedContentType === "Solution Assessment"}
                    onChange={onContentTypeValueChange("Solution Assessment")}
                />
                Solution Assessment
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Solution Assessment Inventory"
                    checked={checkedContentType === "Solution Assessment Inventory"}
                    onChange={onContentTypeValueChange("Solution Assessment Inventory")}
                />
                Solution Assessment Inventory
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Solution Assessment Template"
                    checked={checkedContentType === "Solution Assessment Template"}
                    onChange={onContentTypeValueChange("Solution Assessment Template")}
                />
                Solution Assessment Template
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Solution Overview"
                    checked={checkedContentType === "Solution Overview"}
                    onChange={onContentTypeValueChange("Solution Overview")}
                />
                Solution Overview
                </label>
            </div>
          </Collapsible>
          <Collapsible trigger="Editions">
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Any"
                    checked={checkedEditions === "Any"}
                    onChange={onEditionsValueChange('Any')}
                />
                Any
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="AuraDB Enterprise"
                    checked={checkedEditions === "AuraDB Enterprise"}
                    onChange={onEditionsValueChange('AuraDB Enterprise')}
                />
                AuraDB Enterprise
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="AuraDB Free"
                    checked={checkedEditions === "AuraDB Free"}
                    onChange={onEditionsValueChange('AuraDB Free')}
                />
                AuraDB Free
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="AuraDB Professional"
                    checked={checkedEditions === "AuraDB Professional"}
                    onChange={onEditionsValueChange('AuraDB Professional')}
                />
                AuraDB Professional
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="AuraDS Enterprise"
                    checked={checkedEditions === "AuraDS Enterprise"}
                    onChange={onEditionsValueChange('AuraDS Enterprise')}
                />
                AuraDS Enterprise
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="AuraDS Professional"
                    checked={checkedEditions === "AuraDS Professional"}
                    onChange={onEditionsValueChange('AuraDS Professional')}
                />
                AuraDS Professional
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Community"
                    checked={checkedEditions === "Community"}
                    onChange={onEditionsValueChange('Community')}
                />
                Community
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Enterprise"
                    checked={checkedEditions === "Enterprise"}
                    onChange={onEditionsValueChange('Enterprise')}
                />
                Enterprise
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Enterprise Managed"
                    checked={checkedEditions === "Enterprise Managed"}
                    onChange={onEditionsValueChange('Enterprise Managed')}
                />
                Enterprise Managed
                </label>
            </div>
          </Collapsible>
          <Collapsible trigger="Industry">
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Any"
                    checked={checkedIndustry === "Any"}
                    onChange={onIndustryValueChange('Any')}
                />
                Any
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Banking"
                    checked={checkedIndustry === "Banking"}
                    onChange={onIndustryValueChange('Banking')}
                />
                Banking
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Construction"
                    checked={checkedIndustry === "Construction"}
                    onChange={onIndustryValueChange('Construction')}
                />
                Construction
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Defence"
                    checked={checkedIndustry === "Defence"}
                    onChange={onIndustryValueChange('Defence')}
                />
                Defence
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Pharmaceuticals"
                    checked={checkedIndustry === "Pharmaceuticals"}
                    onChange={onIndustryValueChange('Pharmaceuticals')}
                />
                Pharmaceuticals
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Retail"
                    checked={checkedIndustry === "Retail"}
                    onChange={onIndustryValueChange('Retail')}
                />
                Retail
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Other"
                    checked={checkedIndustry === "Other"}
                    onChange={onIndustryValueChange('Other')}
                />
                Other
                </label>
            </div>
          </Collapsible>
          <Collapsible trigger="Use-case">
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Any"
                    checked={checkedUsecase === "Any"}
                    onChange={onUsecaseValueChange('Any')}
                />
                Any
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Academic Research"
                    checked={checkedUsecase === "Academic Research"}
                    onChange={onUsecaseValueChange('Academic Research')}
                />
                Academic Research
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Data Aggregation"
                    checked={checkedUsecase === "Data Aggregation"}
                    onChange={onUsecaseValueChange('Data Aggregation')}
                />
                Data Aggregation
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Fraud-Detection"
                    checked={checkedUsecase === "Fraud-Detection"}
                    onChange={onUsecaseValueChange('Fraud-Detection')}
                />
                Fraud-Detection
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Improving Operation Efficiency"
                    checked={checkedUsecase === "Improving Operation Efficiency"}
                    onChange={onUsecaseValueChange('Improving Operation Efficiency')}
                />
                Improving Operation Efficiency
                </label>
            </div>
          </Collapsible>
          <Collapsible trigger="Operation">
            <Collapsible trigger="Application Infrastructure">
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="CI/CD/Devops"
                        checked={listedOperation.includes("CI/CD/Devops")}
                        onChange={onOperationValueChange('CI/CD/Devops')}
                    />
                    CI/CD/Devops
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="Data Management and Storage"
                        checked={listedOperation.includes("Data Management and Storage")}
                        onChange={onOperationValueChange('Data Management and Storage')}
                    />
                    Data Management and Storage
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="Disaster Recovery and High Availability"
                        checked={listedOperation.includes("Disaster Recovery and High Availability")}
                        onChange={onOperationValueChange('Disaster Recovery and High Availability')}
                    />
                    Disaster Recovery and High Availability
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="Hardware and Infrastructure Optimization"
                        checked={listedOperation.includes("Hardware and Infrastructure Optimization")}
                        onChange={onOperationValueChange('Hardware and Infrastructure Optimization')}
                    />
                    Hardware and Infrastructure Optimization
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="Microservices and Service-Oriented Architecture (SOA)"
                        checked={listedOperation.includes("Microservices and Service-Oriented Architecture (SOA)")}
                        onChange={onOperationValueChange('Microservices and Service-Oriented Architecture (SOA)')}
                    />
                    Microservices and Service-Oriented Architecture (SOA)
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="Performance Optimization and Scalability"
                        checked={listedOperation.includes("Performance Optimization and Scalability")}
                        onChange={onOperationValueChange('Performance Optimization and Scalability')}
                    />
                    Performance Optimization and Scalability
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="Security and Compliance"
                        checked={listedOperation.includes("Security and Compliance")}
                        onChange={onOperationValueChange('Security and Compliance')}
                    />
                    Security and Compliance
                    </label>
                </div>
            </Collapsible>
            <Collapsible trigger="Security and Compliance">
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="Encyrption"
                        checked={listedOperation.includes("Encyrption")}
                        onChange={onOperationValueChange('Encyrption')}
                    />
                    Encyrption
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="Endpoint Protection"
                        checked={listedOperation.includes("Endpoint Protection")}
                        onChange={onOperationValueChange('Endpoint Protection')}
                    />
                    Endpoint Protection
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="Hybrid Cloud Integration"
                        checked={listedOperation.includes("Hybrid Cloud Integration")}
                        onChange={onOperationValueChange('Hybrid Cloud Integration')}
                    />
                    Hybrid Cloud Integration
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="LDAP"
                        checked={listedOperation.includes("LDAP")}
                        onChange={onOperationValueChange('LDAP')}
                    />
                    LDAP
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="Network Security"
                        checked={listedOperation.includes("Network Security")}
                        onChange={onOperationValueChange('Network Security')}
                    />
                    Network Security
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="RBAC"
                        checked={listedOperation.includes("RBAC")}
                        onChange={onOperationValueChange('RBAC')}
                    />
                    RBAC
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="SSO"
                        checked={listedOperation.includes("SSO")}
                        onChange={onOperationValueChange('SSO')}
                    />
                    SSO
                    </label>
                </div>
            </Collapsible>
            <Collapsible trigger="Visualisation">
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="Business Intelligence (BI)"
                        checked={listedOperation.includes("Business Intelligence (BI)")}
                        onChange={onOperationValueChange('Business Intelligence (BI)')}
                    />
                    Business Intelligence (BI)
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                    <input
                        type="checkbox"
                        value="Graph Discovery, Visualisation and Analysis"
                        checked={listedOperation.includes("Graph Discovery, Visualisation and Analysis")}
                        onChange={onOperationValueChange('Graph Discovery, Visualisation and Analysis')}
                    />
                    Graph Discovery, Visualisation and Analysis
                    </label>
                </div>
            </Collapsible>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Application Infrastructure"
                    checked={listedOperation.includes("Application Infrastructure")}                        
                    onChange={onOperationValueChange('Application Infrastructure')}
                />
                Application Infrastructure
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Backup/Restore"
                    checked={listedOperation.includes("Backup/Restore")}                        
                    onChange={onOperationValueChange('Backup/Restore')}
                />
                Backup/Restore
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Caching"
                    checked={listedOperation.includes("Caching")}                        
                    onChange={onOperationValueChange('Caching')}
                />
                Caching
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Composite Databases"
                    checked={listedOperation.includes("Composite Databases")}                        
                    onChange={onOperationValueChange('Composite Databases')}
                />
                Composite Databases
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Data Loading"
                    checked={listedOperation.includes("Data Loading")}                        
                    onChange={onOperationValueChange('Data Loading')}
                />
                Data Loading
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Data Modelling"
                    checked={listedOperation.includes("Data Modelling")}                        
                    onChange={onOperationValueChange('Data Modelling')}
                />
                Data Modelling
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Data Science"
                    checked={listedOperation.includes("Data Science")}                        
                    onChange={onOperationValueChange('Data Science')}
                />
                Data Science
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Database Configuration"
                    checked={listedOperation.includes("Database Configuration")}                        
                    onChange={onOperationValueChange('Database Configuration')}
                />
                Database Configuration
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Database Managment"
                    checked={listedOperation.includes("Database Managment")}                        
                    onChange={onOperationValueChange('Database Managment')}
                />
                Database Managment
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Database Object Mapping"
                    checked={listedOperation.includes("Database Object Mapping")}                        
                    onChange={onOperationValueChange('Database Object Mapping')}
                />
                Database Object Mapping
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Development"
                    checked={listedOperation.includes("Development")}                        
                    onChange={onOperationValueChange('Development')}
                />
                Development
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="GenAI, LLMs and Vector Embeddings"
                    checked={listedOperation.includes("GenAI, LLMs and Vector Embeddings")}                        
                    onChange={onOperationValueChange('GenAI, LLMs and Vector Embeddings')}
                />
                GenAI, LLMs and Vector Embeddings
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Health Check"
                    checked={listedOperation.includes("Health Check")}                        
                    onChange={onOperationValueChange('Health Check')}
                />
                Health Check
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Import/Export"
                    checked={listedOperation.includes("Import/Export")}                        
                    onChange={onOperationValueChange('Import/Export')}
                />
                Import/Export
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Indexes"
                    checked={listedOperation.includes("Indexes")}                        
                    onChange={onOperationValueChange('Indexes')}
                />
                Indexes
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Installation"
                    checked={listedOperation.includes("Installation")}                        
                    onChange={onOperationValueChange('Installation')}
                />
                Installation
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Logging"
                    checked={listedOperation.includes("Logging")}                        
                    onChange={onOperationValueChange('Logging')}
                />
                Logging
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Monitoring"
                    checked={listedOperation.includes("Monitoring")}                        
                    onChange={onOperationValueChange('Monitoring')}
                />
                Monitoring
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Neo4j Version Upgrade"
                    checked={listedOperation.includes("Neo4j Version Upgrade")}                        
                    onChange={onOperationValueChange('Neo4j Version Upgrade')}
                />
                Neo4j Version Upgrade
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Performance Diagnostics"
                    checked={listedOperation.includes("Performance Diagnostics")}                        
                    onChange={onOperationValueChange('Performance Diagnostics')}
                />
                Performance Diagnostics
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Querying"
                    checked={listedOperation.includes("Querying")}                        
                    onChange={onOperationValueChange('Querying')}
                />
                Querying
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Tuning"
                    checked={listedOperation.includes("Tuning")}                        
                    onChange={onOperationValueChange('Tuning')}
                />
                Tuning
                </label>
            </div>
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    value="Visualisation"
                    checked={listedOperation.includes("Visualisation")}                        
                    onChange={onOperationValueChange('Visualisation')}
                />
                Visualisation
                </label>
            </div>
          </Collapsible>
          <Collapsible trigger="Component">
            <Collapsible trigger="Software">
                <Collapsible trigger="External Software">
                    <Collapsible trigger="3rd Party Application">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="AWS Glue"
                                checked={listedComponent.includes("AWS Glue")}
                                onChange={onComponentValueChange('AWS Glue')}
                            />
                            AWS Glue
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Apache Airflow"
                                checked={listedComponent.includes("Apache Airflow")}
                                onChange={onComponentValueChange('Apache Airflow')}
                            />
                            Apache Airflow
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Gra.fo"
                                checked={listedComponent.includes("Gra.fo")}
                                onChange={onComponentValueChange('Gra.fo')}
                            />
                            Gra.fo
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Graphileon"
                                checked={listedComponent.includes("Graphileon")}
                                onChange={onComponentValueChange('Graphileon')}
                            />
                            Graphileon
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Graphlytic"
                                checked={listedComponent.includes("Graphlytic")}
                                onChange={onComponentValueChange('Graphlytic')}
                            />
                            Graphlytic
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Hackolade"
                                checked={listedComponent.includes("Hackolade")}
                                onChange={onComponentValueChange('Hackolade')}
                            />
                            Hackolade
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Hume"
                                checked={listedComponent.includes("Hume")}
                                onChange={onComponentValueChange('Hume')}
                            />
                            Hume
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="KNIME"
                                checked={listedComponent.includes("KNIME")}
                                onChange={onComponentValueChange('KNIME')}
                            />
                            KNIME
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Kettle/Pentaho"
                                checked={listedComponent.includes("Kettle/Pentaho")}
                                onChange={onComponentValueChange('Kettle/Pentaho')}
                            />
                            Kettle/Pentaho
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Linkurious"
                                checked={listedComponent.includes("Linkurious")}
                                onChange={onComponentValueChange('Linkurious')}
                            />
                            Linkurious
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Liquibase"
                                checked={listedComponent.includes("Liquibase")}
                                onChange={onComponentValueChange('Liquibase')}
                            />
                            Liquibase
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="MS SS IS"
                                checked={listedComponent.includes("MS SS IS")}
                                onChange={onComponentValueChange('MS SS IS')}
                            />
                            MS SS IS
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="PowerBI"
                                checked={listedComponent.includes("PowerBI")}
                                onChange={onComponentValueChange('PowerBI')}
                            />
                            PowerBI
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Qlik"
                                checked={listedComponent.includes("Qlik")}
                                onChange={onComponentValueChange('Qlik')}
                            />
                            Qlik
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="SemSpect"
                                checked={listedComponent.includes("SemSpect")}
                                onChange={onComponentValueChange('SemSpect')}
                            />
                            SemSpect
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Tableau"
                                checked={listedComponent.includes("Tableau")}
                                onChange={onComponentValueChange('Tableau')}
                            />
                            Tableau
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Devops"
                                checked={listedComponent.includes("Tibco Spotfire")}
                                onChange={onComponentValueChange('Tibco Spotfire')}
                            />
                            Tibco Spotfire
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Yed"
                                checked={listedComponent.includes("Yed")}
                                onChange={onComponentValueChange('Yed')}
                            />
                            Yed
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="cytoscape"
                                checked={listedComponent.includes("cytoscape")}
                                onChange={onComponentValueChange('cytoscape')}
                            />
                            cytoscape
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="3rd Party Library">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Google Cloud DataFlow"
                                checked={listedComponent.includes("Google Cloud DataFlow")}
                                onChange={onComponentValueChange('Google Cloud DataFlow')}
                            />
                            Google Cloud DataFlow
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="NetworkX"
                                checked={listedComponent.includes("NetworkX")}
                                onChange={onComponentValueChange('NetworkX')}
                            />
                            NetworkX
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="d3.js"
                                checked={listedComponent.includes("d3.js")}
                                onChange={onComponentValueChange('d3.js')}
                            />
                            d3.js
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="keylines"
                                checked={listedComponent.includes("keylines")}
                                onChange={onComponentValueChange('keylines')}
                            />
                            keylines
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="numpy"
                                checked={listedComponent.includes("numpy")}
                                onChange={onComponentValueChange('numpy')}
                            />
                            numpy
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="ogma"
                                checked={listedComponent.includes("ogma")}
                                onChange={onComponentValueChange('ogma')}
                            />
                            ogma
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="protovis"
                                checked={listedComponent.includes("protovis")}
                                onChange={onComponentValueChange('protovis')}
                            />
                            protovis
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="vis.js"
                                checked={listedComponent.includes("vis.js")}
                                onChange={onComponentValueChange('vis.js')}
                            />
                            vis.js
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="yfiles"
                                checked={listedComponent.includes("yfiles")}
                                onChange={onComponentValueChange('yfiles')}
                            />
                            yfiles
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="AI/LLM Provider">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="OpenAI"
                                checked={listedComponent.includes("OpenAI")}
                                onChange={onComponentValueChange('OpenAI')}
                            />
                            OpenAI
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Vertex AI"
                                checked={listedComponent.includes("Vertex AI")}
                                onChange={onComponentValueChange('Vertex AI')}
                            />
                            Vertex AI
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Application Framework">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value=".Net"
                                checked={listedComponent.includes(".Net")}
                                onChange={onComponentValueChange('.Net')}
                            />
                            .Net
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Apache Hop"
                                checked={listedComponent.includes("Apache Hop")}
                                onChange={onComponentValueChange('Apache Hop')}
                            />
                            Apache Hop
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Spring"
                                checked={listedComponent.includes("Spring")}
                                onChange={onComponentValueChange('Spring')}
                            />
                            Spring
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Computing Platform">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Linux"
                                checked={listedComponent.includes("Linux")}
                                onChange={onComponentValueChange('Linux')}
                            />
                            Linux
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Windows"
                                checked={listedComponent.includes("Windows")}
                                onChange={onComponentValueChange('Windows')}
                            />
                            Windows
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Integrated Development Environment (IDE)">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="IntelliJ"
                                checked={listedComponent.includes("IntelliJ")}
                                onChange={onComponentValueChange('IntelliJ')}
                            />
                            IntelliJ
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="VsCode"
                                checked={listedComponent.includes("VsCode")}
                                onChange={onComponentValueChange('VsCode')}
                            />
                            VsCode
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Programming Language">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Go"
                                checked={listedComponent.includes("Go")}
                                onChange={onComponentValueChange('Go')}
                            />
                            Go
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="VsCode"
                                checked={listedComponent.includes("VsCode")}
                                onChange={onComponentValueChange('VsCode')}
                            />
                            VsCode
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="JavaScript"
                                checked={listedComponent.includes("JavaScript")}
                                onChange={onComponentValueChange('JavaScript')}
                            />
                            JavaScript
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="PHP"
                                checked={listedComponent.includes("PHP")}
                                onChange={onComponentValueChange('PHP')}
                            />
                            PHP
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="VsCode"
                                checked={listedComponent.includes("VsCode")}
                                onChange={onComponentValueChange('VsCode')}
                            />
                            VsCode
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Python"
                                checked={listedComponent.includes("Python")}
                                onChange={onComponentValueChange('Python')}
                            />
                            Python
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="UI Component Environment">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="StoryBook"
                                checked={listedComponent.includes("StoryBook")}
                                onChange={onComponentValueChange('StoryBook')}
                            />
                            StoryBook
                            </label>
                        </div>
                    </Collapsible>
                </Collapsible>
                <Collapsible trigger="Neo4j Software">
                    <Collapsible trigger="Aura">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Aura API"
                                checked={listedComponent.includes("Aura API")}
                                onChange={onComponentValueChange('Aura API')}
                            />
                            Aura API
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Aura Console"
                                checked={listedComponent.includes("Aura Console")}
                                onChange={onComponentValueChange('Aura Console')}
                            />
                            Aura Console
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Community-made Component">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Versioner Core"
                                checked={listedComponent.includes("Versioner Core")}
                                onChange={onComponentValueChange('Versioner Core')}
                            />
                            Versioner Core
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Cypher Procedures & Functions">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="APOC Core"
                                checked={listedComponent.includes("APOC Core")}
                                onChange={onComponentValueChange('APOC Core')}
                            />
                            APOC Core
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Drivers & Connectors">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="BI Connector"
                                checked={listedComponent.includes("BI Connector")}
                                onChange={onComponentValueChange('BI Connector')}
                            />
                            BI Connector
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Kafka Connector"
                                checked={listedComponent.includes("Kafka Connector")}
                                onChange={onComponentValueChange('Kafka Connector')}
                            />
                            Kafka Connector
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Spark Connector"
                                checked={listedComponent.includes("Spark Connector")}
                                onChange={onComponentValueChange('Spark Connector')}
                            />
                            Spark Connector
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Warehouse Connector"
                                checked={listedComponent.includes("Warehouse Connector")}
                                onChange={onComponentValueChange('Warehouse Connector')}
                            />
                            Warehouse Connector
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Interface">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Aura Browser"
                                checked={listedComponent.includes("Aura Browser")}
                                onChange={onComponentValueChange('Aura Browser')}
                            />
                            Aura Browser
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Browser"
                                checked={listedComponent.includes("Browser")}
                                onChange={onComponentValueChange('Browser')}
                            />
                            Browser
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Command Line"
                                checked={listedComponent.includes("Command Line")}
                                onChange={onComponentValueChange('Command Line')}
                            />
                            Command Line
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Cypher Shell"
                                checked={listedComponent.includes("Cypher Shell")}
                                onChange={onComponentValueChange('Cypher Shell')}
                            />
                            Cypher Shell
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Data Importer"
                                checked={listedComponent.includes("Data Importer")}
                                onChange={onComponentValueChange('Data Importer')}
                            />
                            Data Importer
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Desktop"
                                checked={listedComponent.includes("Desktop")}
                                onChange={onComponentValueChange('Desktop')}
                            />
                            Desktop
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="HTTP API"
                                checked={listedComponent.includes("HTTP API")}
                                onChange={onComponentValueChange('HTTP API')}
                            />
                            HTTP API
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Neo4j Application">
                    <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Ops Manager"
                                checked={listedComponent.includes("Ops Manager")}
                                onChange={onComponentValueChange('Ops Manager')}
                            />
                            Ops Manager
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Neo4j Labs">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="APOC Extended"
                                checked={listedComponent.includes("APOC Extended")}
                                onChange={onComponentValueChange('APOC Extended')}
                            />
                            APOC Extended
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Aura CLI"
                                checked={listedComponent.includes("Aura CLI")}
                                onChange={onComponentValueChange('Aura CLI')}
                            />
                            Aura CLI
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Cypher Workbench"
                                checked={listedComponent.includes("Cypher Workbench")}
                                onChange={onComponentValueChange('Cypher Workbench')}
                            />
                            Cypher Workbench
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="ETL Tool"
                                checked={listedComponent.includes("ETL Tool")}
                                onChange={onComponentValueChange('ETL Tool')}
                            />
                            ETL Tool
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="GenAI Ecosystem"
                                checked={listedComponent.includes("GenAI Ecosystem")}
                                onChange={onComponentValueChange('GenAI Ecosystem')}
                            />
                            GenAI Ecosystem
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Needle Start Kit"
                                checked={listedComponent.includes("Needle Start Kit")}
                                onChange={onComponentValueChange('Needle Start Kit')}
                            />
                            Needle Start Kit
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Neo4j plugin for Liquibase"
                                checked={listedComponent.includes("Neo4j plugin for Liquibase")}
                                onChange={onComponentValueChange('Neo4j plugin for Liquibase')}
                            />
                            Ops
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Neo4j-Migrations"
                                checked={listedComponent.includes("Neo4j-Migrations")}
                                onChange={onComponentValueChange('Neo4j-Migrations')}
                            />
                            Neo4j-Migrations
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Neodash"
                                checked={listedComponent.includes("Neodash")}
                                onChange={onComponentValueChange('Neodash')}
                            />
                            Neodash
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Neosemantics"
                                checked={listedComponent.includes("Neosemantics")}
                                onChange={onComponentValueChange('Neosemantics')}
                            />
                            Neosemantics
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Rdflib-Neo4j"
                                checked={listedComponent.includes("Rdflib-Neo4j")}
                                onChange={onComponentValueChange('Rdflib-Neo4j')}
                            />
                            Rdflib-Neo4j
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="arrows.app"
                                checked={listedComponent.includes("arrows.app")}
                                onChange={onComponentValueChange('arrows.app')}
                            />
                            arrows.app
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="neomodel"
                                checked={listedComponent.includes("neomodel")}
                                onChange={onComponentValueChange('neomodel')}
                            />
                            Ops
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Neo4j Library">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="GraphQL"
                                checked={listedComponent.includes("GraphQL")}
                                onChange={onComponentValueChange('GraphQL')}
                            />
                            GraphQL
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Object Graph Mapping Library"
                                checked={listedComponent.includes("Object Graph Mapping Library")}
                                onChange={onComponentValueChange('Object Graph Mapping Library')}
                            />
                            Object Graph Mapping Library
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Spring Data Neo4j"
                                checked={listedComponent.includes("Spring Data Neo4j")}
                                onChange={onComponentValueChange('Spring Data Neo4j')}
                            />
                            Spring Data Neo4j
                            </label>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Plugins">
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Bloom"
                                checked={listedComponent.includes("Bloom")}
                                onChange={onComponentValueChange('Bloom')}
                            />
                            Bloom
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Graph Data Science"
                                checked={listedComponent.includes("Graph Data Science")}
                                onChange={onComponentValueChange('Graph Data Science')}
                            />
                            Graph Data Science
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                            <input
                                type="checkbox"
                                value="Neo4j plugin for Liquibase"
                                checked={listedComponent.includes("Neo4j plugin for Liquibase")}
                                onChange={onComponentValueChange('Neo4j plugin for Liquibase')}
                            />
                            Neo4j plugin for Liquibase
                            </label>
                        </div>
                    </Collapsible>
                </Collapsible>
            </Collapsible>
            <Collapsible trigger="Operation">
                <Collapsible trigger="Application Infrastructure">
                    <div className="checkbox">
                        <label>
                        <input
                            type="checkbox"                                
                            value="Amazon Web Services (AWS)"
                            checked={listedComponent.includes("Amazon Web Services (AWS)")}
                            onChange={onComponentValueChange('Amazon Web Services (AWS)')}
                        />
                        Amazon Web Services (AWS)
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input
                            type="checkbox"                                
                            value="Google Cloud Platform"
                            checked={listedComponent.includes("Google Cloud Platform")}
                            onChange={onComponentValueChange('Google Cloud Platform')}
                        />
                        Google Cloud Platform
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input
                            type="checkbox"                                
                            value="Microsoft Azure"
                            checked={listedComponent.includes("Microsoft Azure")}
                            onChange={onComponentValueChange('Microsoft Azure')}
                        />
                        Microsoft Azure
                        </label>
                    </div>
                </Collapsible>
                <Collapsible trigger="CI/CD/Devops">
                    <div className="checkbox">
                        <label>
                        <input
                            type="checkbox"                                
                            value="Docker"
                            checked={listedComponent.includes("Docker")}
                            onChange={onComponentValueChange('Docker')}
                        />
                        Docker
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input
                            type="checkbox"                                
                            value="GitLab"
                            checked={listedComponent.includes("GitLab")}
                            onChange={onComponentValueChange('GitLab')}
                        />
                        GitLab
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input
                            type="checkbox"                                
                            value="Google Kubernetes Engine"
                            checked={listedComponent.includes("Google Kubernetes Engine")}
                            onChange={onComponentValueChange('Google Kubernetes Engine')}
                        />
                        Google Kubernetes Engine
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input
                            type="checkbox"                                
                            value="Jenkins"
                            checked={listedComponent.includes("Jenkins")}
                            onChange={onComponentValueChange('Jenkins')}
                        />
                        Jenkins
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input
                            type="checkbox"                                
                            value="Kubernetes"
                            checked={listedComponent.includes("Kubernetes")}
                            onChange={onComponentValueChange('Kubernetes')}
                        />
                        Kubernetes
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input
                            type="checkbox"                                
                            value="circleci"
                            checked={listedComponent.includes("circleci")}
                            onChange={onComponentValueChange('circleci')}
                        />
                        circleci
                        </label>
                    </div>
                </Collapsible>
                <Collapsible trigger="Database Managment">
                    <div className="checkbox">
                        <label>
                        <input
                            type="checkbox"                                
                            value="Workspace"
                            checked={listedComponent.includes("Workspace")}
                            onChange={onComponentValueChange('Workspace')}
                        />
                        Workspace
                        </label>
                    </div>
                </Collapsible>
            </Collapsible>
          </Collapsible>
          <div style={{paddingLeft:'15px'}}>
            <button className="btn btn-default" type="submit">
                Submit
            </button>
          </div>
        </form>
    );
}